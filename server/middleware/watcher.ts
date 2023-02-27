
export default defineEventHandler(async(event) => {
  try {
    const body = await readBody(event);

    const { storeid, storename, storeaddress, outside, ship, TempVar } = body;

    setCookie(event, 'storeid', storeid);
    setCookie(event, 'storename', storename);
    setCookie(event, 'storeaddress', storeaddress);
    setCookie(event, 'outside', outside);
    setCookie(event, 'ship', ship);
    setCookie(event, 'TempVar', TempVar);

    navigateTo('/');
    // const maxAge = 60 * 60 * 24 * 7;
    // setCookie(event, 'emap_711', body, {
    //   httpOnly: true,
    //   maxAge,
    //   // expires: 3,
    //   secure: process.env.NODE_ENV === 'production',
    //   path: '/'
    // });

    return { body };
  } catch (error) {
  }
});
