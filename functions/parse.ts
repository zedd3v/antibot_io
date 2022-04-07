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

  return parsed;

  // const steps: any = {};

  // parsed.forEach((p: { t: any; d: any }) => {
  //   steps[p.t] = p.d;
  // });

  // return steps;
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
