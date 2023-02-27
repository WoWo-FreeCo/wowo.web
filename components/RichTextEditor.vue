<template>
  <div id="text-editor">
    <div v-if="editor" class="toolbar">
      <div class="align-dropdown">
        <button class="dropbtn">
          Heading ▼
        </button>
        <div class="dropdown-content">
          <a
            v-for="index in 6"
            :key="index"
            :class="{ active: editor.isActive('heading', { level: index }) }"
            :style="{ fontSize: 20 - index + 'px' }"
            role="button"
            @click="onHeadingClick(index)"
          >
            H{{ index }}
          </a>
        </div>
      </div>

      <button
        v-for="({ slug, option, active, icon }, index) in textActions"
        :key="index"
        :class="{ active: editor.isActive(active) }"
        @click="onActionClick(slug, option)"
      >
        <i :class="icon" />
      </button>
      <button @click="addImage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style="width: 20px; height: 20px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>

    <editor-content :editor="editor" />

    <!-- <div v-if="editor" class="footer">
      <span class="characters-count" :class="maxLimit ? limitWarning : ''">
        {{ charactersCount }}
        {{ maxLimit ? `/ ${maxLimit} characters` : 'characters' }}
      </span>
      |
      <span class="words-count"> {{ wordsCount }} words </span>
    </div> -->
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Image from '@tiptap/extension-image';
import CharacterCount from '@tiptap/extension-character-count';

export default {
  components: {
    EditorContent
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    maxLimit: {
      type: Number,
      default: 9999
    }
  },
  data() {
    return {
      editor: null,
      textActions: [
        { slug: 'bold', icon: 'ri-bold', active: 'bold' },
        { slug: 'italic', icon: 'ri-italic', active: 'italic' },
        { slug: 'underline', icon: 'ri-underline', active: 'underline' },
        { slug: 'strike', icon: 'ri-strikethrough', active: 'strike' },
        {
          slug: 'align',
          option: 'left',
          icon: 'ri-align-left',
          active: { textAlign: 'left' }
        },
        {
          slug: 'align',
          option: 'center',
          icon: 'ri-align-center',
          active: { textAlign: 'center' }
        },
        {
          slug: 'align',
          option: 'right',
          icon: 'ri-align-right',
          active: { textAlign: 'right' }
        },
        {
          slug: 'align',
          option: 'justify',
          icon: 'ri-align-justify',
          active: { textAlign: 'justify' }
        },
        { slug: 'bulletList', icon: 'ri-list-unordered', active: 'bulletList' },
        { slug: 'orderedList', icon: 'ri-list-ordered', active: 'orderedList' },
        { slug: 'subscript', icon: 'ri-subscript-2', active: 'subscript' },
        {
          slug: 'superscript',
          icon: 'ri-superscript-2',
          active: 'superscript'
        },
        // { slug: 'undo', icon: 'ri-arrow-go-back-line', active: 'undo' },
        // { slug: 'redo', icon: 'ri-arrow-go-forward-line', active: 'redo' },
        { slug: 'clear', icon: 'ri-format-clear', active: 'clear' },
        { slug: 'code', icon: 'ri-code-view', active: 'code' }
      ]
    };
  },
  computed: {
    charactersCount() {
      return this.editor.storage.characterCount.characters();
    },
    wordsCount() {
      return this.editor.storage.characterCount.words();
    },
    limitWarning() {
      const isCloseToMax = this.charactersCount >= this.maxLimit - 20;
      const isMax = this.charactersCount === this.maxLimit;

      if (isCloseToMax && !isMax) return 'warning';
      if (isMax) return 'danger';

      return '';
    }
  },
  watch: {
    modelValue(value) {
      if (this.editor.getHTML() === value) return;
      this.editor.commands.setContent(this.modelValue, false);
    }
  },
  mounted() {
    this.editor = new Editor({
      content: this.modelValue,
      extensions: [
        StarterKit,
        Underline,
        Subscript,
        Superscript,
        Image,
        CharacterCount.configure({
          limit: this.maxLimit
        }),
        TextAlign.configure({
          types: ['heading', 'paragraph']
        })
      ],
      onUpdate: () => {
        this.$emit('update:modelValue', this.editor.getHTML());
      }
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
  methods: {
    onActionClick(slug, option = null) {
      const vm = this.editor.chain().focus();
      const actionTriggers = {
        bold: () => vm.toggleBold().run(),
        italic: () => vm.toggleItalic().run(),
        underline: () => vm.toggleUnderline().run(),
        strike: () => vm.toggleStrike().run(),
        bulletList: () => vm.toggleBulletList().run(),
        orderedList: () => vm.toggleOrderedList().run(),
        align: () => vm.setTextAlign(option).run(),
        subscript: () => vm.toggleSubscript().run(),
        superscript: () => vm.toggleSuperscript().run(),
        undo: () => vm.undo().run(),
        redo: () => vm.redo().run(),
        clear: () => {
          vm.clearNodes().run();
          vm.unsetAllMarks().run();
        },
        code: () => vm.toggleCodeBlock().run()
      };

      actionTriggers[slug]();
    },
    onHeadingClick(index) {
      const vm = this.editor.chain().focus();
      vm.toggleHeading({ level: index }).run();
    },
    addImage() {
      const url = window.prompt(
        'Image URL',
        // Using picsum.photo/id/... and NOT
        // picsum.photos/w/h or the image will
        // change when we change the size and
        // tiptap redraws
        `https://picsum.photos/id/${
          Math.floor(Math.random() * 200) + 1
        }/200/300`
      );
      if (url) {
        this.editor.chain().focus().setImage({ src: url, width: '100px' }).run();
      }
    }
  }
};
</script>

<style lang="less" scoped>
#text-editor {
  border: 1px solid #808080;

  .toolbar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #808080;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      font-size: 20px;
      background: #fff;
      color: #333;
      border: none;
      border-radius: 2px;
      margin: 0.5em 4px;
      -webkit-appearance: none;
      cursor: pointer;

      &.active {
        background: #333;
        color: #fff;
      }
    }
  }

  .align-dropdown {
    position: relative;
    display: inline-block;
    margin: 0.5em 8px;

    > button {
      height: 32px;
      background: #fff;
      color: #333;
      border: none;
      border-radius: 2px;
      -webkit-appearance: none;
      cursor: pointer;
    }

    > .dropdown-content {
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      border: 1px solid #333;
      outline: 1px solid #fff;
      border-radius: 2px;
      background-color: #fff;
      z-index: 1;

      a {
        display: block;
        padding: 6px 12px;
        text-align: center;
        cursor: pointer;

        &:hover,
        &.active {
          background: #333;
          color: #fff;
        }
      }
    }

    &:hover .dropdown-content {
      display: block;
    }
  }

  .divider {
    width: 1px;
    height: 24px;
    background: #333;
    margin-right: 6px;
  }

  .footer {
    color: #808080;
    font-size: 14px;
    text-align: right;
    padding: 6px;

    .characters-count {
      &.warning {
        color: orange;
      }

      &.danger {
        color: red;
      }
    }
  }

}
</style>
