export const getCookieByName = (name: string | number) => {
    const pairs = document.cookie.split(';');
    const cookieObj = {};
    pairs.forEach(pairStr => {
      const pair = pairStr.split('=');
      // @ts-ignore
      cookieObj[pair[0].trim()] = pair[1];
    });
      // @ts-ignore
      return cookieObj[name] || null;
  };
  