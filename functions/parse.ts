const se = (e: any, r: any) => {
  let l = '';
  for (let t = 0; t < e.length; t++) l += String.fromCharCode(e.charCodeAt(t) ^ r);
  return l;
};

const xx = (t: any, e: any, r: any) => {
  for (var l = se(btoa(r), 10), o = [], n = -1, a = 0; a < t.length; a++) {
    var h = Math.floor(a / l.length + 1),
      s = a >= l.length ? a % l.length : a,
      h = l.charCodeAt(s) * l.charCodeAt(h);
    n < h && (n = h);
  }
  for (var i = 0; t.length > i; i++) {
    var c = Math.floor(i / l.length) + 1,
      f = i % l.length,
      g = l.charCodeAt(f) * l.charCodeAt(c);
    for (e <= g && (g = Math.floor((+g / +n) * (e - 1) + 0)); -1 !== o.indexOf(g); ) g += 1;
    o.push(g);
  }
  return o.sort(function (t, e) {
    return t - e;
  });
};

const us = (e: any, t: any, r: any) => {
  var l = se(btoa(t), 10),
    o = xx(l, e.length - 20, r);
  let n: any[] = [],
    a = 0;
  for (let t = 0; t < l.length; t++) {
    var h = o[t] - t - a;
    n.splice(a, 0, ...e.slice(0, h)), (e = e.slice(h)), (a = o[t] - t - 1);
  }
  return n.join('').slice(0, -l.length) + e;
};

const parse = (t: string) => {
  const parsed = JSON.parse(
    se(atob(us(t.split('payload=')[1].split('&')[0], '1604064986000', t.split('uuid=')[1].split('&')[0])), 50)
  );

  const steps: any = {};

  parsed.forEach((p: { t: any; d: any }) => {
    steps[p.t] = p.d;
  });

  return steps;
};

export type PXPayload = {
  [step: string]: string[];
};

export function ParsePayload(payload: string): PXPayload | null {
  try {
    const parsedPayload: PXPayload = parse(payload);

    console.log(parsedPayload);

    return Object.keys(parsedPayload).length === 0 ? null : parsedPayload;
  } catch (e) {
    return console.error(e), null;
  }
}

// payload=aUkQRhAIEGJqAwIKAwQQHhBWEAhJEGJqAwIBBAIQCBBaRkZCQQgdHUVFRRxBQVdcQVccUV1fHVdcH1pAEB4QYmoDAgsACxAIAh4QYmoDAwMKBBAIEGVbXAEAEB4QYmoDAgQAABAIAh4QYmoDAgAFGAB^AIAQQAAR4SQY}moDAgsFAhAIAQQCDNKAh84QYmoDAgILDNBhAIAa>wQGBgIFBwUBAD`QsABh4QYmoDAwKICBhAIAwQGBg}IFGBwUBAQsBBh4QYmoDAgACBBAIEAECCgoHBQsCHwoEC1MfKAwNX7UR9QBgpXHwZUCgIECwUACwVUAhAeEGJ7qAwICCgoQCEZAR1dPT28=&appId=PX58Asv359&tag=v7.3.5&uuid=30885790-869a-11ec-b48e-4f80697297f0&ft=248&seq=0&en=NTA&pc=8579059979877888&vid=321036fa-7978-11ec-9973-7444554c5364&pxhd=I5etw-cn-7Rj8f4MqZDACHG1vgBxAenkcn61yJmxRthVv0BAMxFZX5ZRtlFt63RN48xYkF9d02V4c2C45IB/Hg==:hOdh5SyUiaihoPJ4339vc9-9RLPWrJwLxhh7hlJdXol9qB9HhsNX2jw1c3zyr9tEw0j4lxRpqidSPCVtNDxsK9fqLZszqX0U2nEYf6FMzGY=&rsc=1