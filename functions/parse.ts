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

const parse = (t: string): PXPayload => {
  const parsed = JSON.parse(
    se(atob(us(t.split('payload=')[1].split('&')[0], '1604064986000', t.split('uuid=')[1].split('&')[0])), 50)
  );

  return parsed;
};

const removeStatics = (payload: PXPayload) => {
  const cleaned: PXPayload = JSON.parse(JSON.stringify(payload));

  cleaned.forEach((step) => {
    switch (step.t) {
      case 'PX859':
        ['PX862', 'PX1010', 'PX1011', 'PX908', 'PX909', 'PX910', 'PX820', 'PX930', 'PX861'].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX10303':
        [
          'PX10141',
          'PX10418',
          'PX11181',
          'PX11147',
          'PX10840',
          'PX10464',
          'PX10080',
          'PX10522',
          'PX10190',
          'PX10970',
          'PX10250',
          'PX10225',
          'PX10010',
          'PX11042',
          'PX10557',
          'PX10824',
          'PX10087',
          'PX10170',
          'PX10098',
          'PX11065',
          'PX10441',
          'PX10855',
          'PX10456',
          'PX11102',
          'PX10218',
          'PX10162',
          'PX10940',
          'PX11209',
          'PX10498',
          'PX11002',
          'PX10410',
          'PX11018',
          'PX11243',
          'PX11015',
          'PX10742',
          'PX11148',
          'PX10846',
          'PX10323',
          'PX10659',
          'PX10316',
          'PX11043',
          'PX10289',
          'PX10516',
          'PX10390',
          'PX10822',
          'PX10530',
          'PX10400',
          'PX10712',
          'PX10555',
          'PX10347',
          'PX10119',
          'PX10249',
          'PX10238',
          'PX11245',
          'PX11244',
          'PX11246',
          'PX11247',
          'PX11248',
          'PX10089',
          'PX10724',
          'PX10561',
          'PX10499',
          'PX10843',
          'PX10850',
          'PX11113',
          'PX11138',
          'PX10204',
          'PX11170',
          'PX11174',
          'PX10243',
          'PX10422',
          'PX11055',
          'PX10599',
          'PX11010',
          'PX10790',
          'PX10093',
          'PX10604',
          'PX10472',
          'PX10296',
          'PX10397',
          'PX11186',
          'PX10758',
          'PX10099',
          'PX10336',
          'PX10373',
          'PX10547',
          'PX10174',
          'PX10775',
          'PX10802',
          'PX10628',
          'PX11039',
          'PX10539',
          'PX10189',
          'PX10399',
          'PX10963',
          'PX10081',
          'PX10273',
          'PX10595',
          'PX10267',
          'PX10551',
          'PX10239',
          'PX10558',
          'PX10236',
          'PX11060',
          'PX10801',
          'PX10585',
          'PX10058',
          'PX10096',
          'PX10096',
          'PX10366',
          'PX10872',
          'PX11123',
          'PX10394',
          'PX10259',
          'PX10976',
          'PX11028',
          'PX10156',
          'PX10995',
          'PX10567',
          'PX11192',
          'PX10227',
          'PX11249',
          'PX11253',
          'PX11256',
          'PX11235',
          'PX11236',
          'PX11237',
          'PX11238',
          'PX11239',
          'PX11240',
          'PX11241',
          'PX11242',
          'PX11235',
          'PX11236',
          'PX11237',
          'PX11238',
          'PX11239',
          'PX11240',
          'PX11241',
          'PX11242',
          'PX10065',
          'PX11153',
          'PX10509',
          'PX10929',
          'PX10248',
          'PX10311',
          'PX10046',
          'PX10744',
          'PX10705',
          'PX10028',
          'PX10905',
          'PX10362',
          'PX10482',
          'PX10056',
          'PX1069',
          'PX10437',
          'PX11205',
          'PX10283',
          'PX10774',
          'PX11176',
          'PX10213',
          'PX10365',
          'PX10757',
          'PX11081',
          'PX10351',
          'PX10926',
          'PX10232',
          'PX10750',
          'PX10116',
          'PX10565',
          'PX11158',
          'PX10800',
          'PX10379',
          'PX11072',
          'PX11211',
          'PX10601',
          'PX10680',
          'PX11115',
          'PX11135',
          'PX11264',
          'PX11274',
          'PX11277',
          'PX11278',
        ].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX10646':
        [
          'PX10688',
          'PX11133',
          'PX10215',
          'PX10760',
          'PX10314',
          'PX10136',
          'PX10216',
          'PX10737',
          'PX10329',
          'PX10645',
          'PX10663',
          'PX11024',
          'PX10602',
        ].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX10672':
        ['PX10950'].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX10257':
        [
          'PX11256',
          'PX11221',
          'PX10187',
          'PX10831',
          'PX10820',
          'PX10020',
          'PX10185',
          'PX10061',
          'PX10529',
          'PX10279',
          'PX11016',
          'PX10753',
          'PX10246',
          'PX11232',
          'PX10871',
          'PX10165',
          'PX11231',
          'PX11077',
          'PX10244',
          'PX11178',
          'PX10560',
          'PX11154',
          'PX10950',
          'PX11173',
          'PX10177',
          'PX11012',
          'PX10109',
          'PX10325',
          'PX11220',
          'PX11166',
          'PX10669',
          'PX10401',
          'PX10707',
          'PX11023',
          'PX11056',
          'PX10024',
          'PX10918',
          'PX10158',
          'PX10089',
          'PX10724',
          'PX10561',
          'PX10499',
          'PX10843',
          'PX10850',
          'PX11113',
          'PX10249',
          'PX10267',
          'PX10567',
          'PX10336',
          'PX10162',
          'PX10472',
          'PX10296',
          'PX10397',
          'PX11186',
          'PX10758',
          'PX10099',
          'PX10437',
          'PX10714',
          'PX10648',
          'PX10852',
          'PX11076',
          'PX11206',
          'PX10095',
          'PX11255',
          'PX10999',
          'PX10394',
          'PX10250',
          'PX10017',
          'PX10263',
          'PX10958',
          'PX10159',
          'PX11140',
          'PX10194',
          'PX10558',
        ].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX805':
        [
          'PX10360',
          'PX91',
          'PX92',
          'PX269',
          'PX270',
          'PX185',
          'PX186',
          'PX231',
          'PX232',
          'PX908',
          'PX909',
          'PX910',
          'PX820',
          'PX930',
          'PX1010',
        ].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX10816':
        ['PX10206', 'PX11186', 'PX10929', 'PX10617', 'PX10970'].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX11146':
        ['PX10395', 'PX10892', 'PX10593', 'PX10562', 'PX10655', 'PX11193', 'PX10437'].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX10845':
        ['PX10705', 'PX10950', 'PX10708', 'PX11189', 'PX10437'].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX10500':
        ['PX10705', 'PX10200', 'PX10592', 'PX10770', 'PX10654', 'PX10437', 'PX10164'].forEach((key) => {
          delete step.d[key];
        });
        break;
      case 'PX561':
        [
          'PX10705',
          'PX10654',
          'PX10712',
          'PX10555',
          'PX10347',
          'PX10119',
          'PX10819',
          'PX10437',
          'PX11098',
          'PX10335',
          'PX10561',
          'PX10499',
          'PX10626',
          'PX10267',
          'PX10551',
          'PX10239',
          'PX10069',
          'PX10927',
          'PX11292',
          'PX10453',
          'PX10592',
          'PX10060',
          'PX10640',
          'PX11138',
          'PX10204',
          'PX11134',
          'PX10423',
          'PX10428',
          'PX10989',
          'PX10164',
          'PX10373',
          'PX11228',
          'PX11250',
          'PX11251',
          'PX11257',
          'PX11258',
          'PX11267',
          'PX11266',
          'PX11276',
          'PX11249',
        ].forEach((key) => {
          delete step.d[key];
        });
        break;
      default:
        break;
    }
    [
      'PX10622',
      'PX11004',
      'PX10360',
      'PX10088',
      'PX10206',
      'PX11073',
      'PX55',
      'PX10848',
      'PX10848',
      'PX11031',
      'PX10384',
      'PX10778',
      'PX755',
      'PX11031',
      'PX10778',
      'PX755',
      'PX10384',
      'PX11230',
    ].forEach((key) => {
      delete step.d[key];
    });
  });

  return cleaned;
};

export type PXPayload = Array<{
  t: string;
  d: {
    [key: string]: any;
  };
}>;

export function ParsePayload(payload: string): PXPayload | null {
  try {
    const parsedPayload: PXPayload = parse(payload);

    console.log(JSON.stringify(parsedPayload));

    console.log(JSON.stringify(removeStatics(parsedPayload)));

    return Object.keys(parsedPayload).length === 0 ? null : parsedPayload;
  } catch (e) {
    return console.error(e), null;
  }
}
