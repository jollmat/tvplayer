import { TdtChannelDto } from "src/app/model/dto/tdt-channel-dto.interface";

export const OTHER_CHANNELS_LIST: TdtChannelDto[] = [
    {
        name: 'VH1 Italia',
        logo: 'https://i.imgur.com/5ONlZGS.png',
        epg_id: 'VH1Italia.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://content.uplynk.com/channel/36953f5b6546464590d2fcd954bc89cf.m3u8'
          }
        ]
      },{
        name: 'RadioItaliaTV',
        logo: 'https://i.imgur.com/4VCEJuJ.png',
        epg_id: 'RadioItaliaTV.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://radioitaliatv.akamaized.net/hls/live/2093117/RadioitaliaTV/master.m3u8'
          }
        ]
      },{
        name: 'RTV Noord',
        logo: 'https://i.imgur.com/pO5Mexa.png',
        epg_id: 'RTVNoord.nl',
        country: 'nl',
        options: [
          {
            format: 'm3u8',
            url: 'https://media.rtvnoord.nl/live/rtvnoord/tv/3e8fe3c1-0868-49b0-b2f3-7dd6eb30651f/index.m3u8'
          }
        ]
      },{
        name: 'Omroep Flevoland',
        logo: 'https://i.imgur.com/d1CmTcI.png',
        epg_id: 'OmroepFlevolandTV.nl',
        country: 'nl',
        options: [
          {
            format: 'm3u8',
            url: 'https://d5ms27yy6exnf.cloudfront.net/live/omroepflevoland/tv/index.m3u8'
          }
        ]
      },{
        name: 'Omroep Brabant',
        logo: 'https://i.imgur.com/Jv7IjHJ.png',
        epg_id: 'OmroepBrabantTV.nl',
        country: 'nl',
        options: [
          {
            format: 'm3u8',
            url: 'http://d3slqp9xhts6qb.cloudfront.net/live/omroepbrabant/tv/index.m3u8'
          }
        ]
      },{
        name: 'Expressen TV',
        logo: 'https://i.imgur.com/8EjMSr7.png',
        epg_id: 'ExpressenTV.se',
        country: 'se',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn0-03837-liveedge0.dna.ip-only.net/03837-liveedge0/smil:03837-tx2/playlist.m3u8'
          }
        ]
      },{
        name: 'Kanal 10 Sverige',
        logo: 'https://i.imgur.com/vlh699v.png',
        epg_id: 'Kanal10.se',
        country: 'se',
        options: [
          {
            format: 'm3u8',
            url: 'https://rrr.sz.xlcdn.com/?account=cn_kanal10media&file=live_transcoded&type=live&service=wowza&protocol=https&output=playlist.m3u8'
          }
        ]
      },{
        name: 'Di TV',
        logo: 'https://i.imgur.com/zApTDWn.png',
        epg_id: 'DiTV.se',
        country: 'se',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn0-03837-liveedge0.dna.ip-only.net/03837-liveedge0/smil:03837-tx4/playlist.m3u8'
          }
        ]
      },{
        name: 'Stories – Rakuten TV Italia',
        logo: 'https://i.imgur.com/tMcUvjI.jpg',
        epg_id: 'rakuten-stories.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://rakuten-spotlight-6-eu.rakuten.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Andorra TV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Logo_Andorra_Televisi%C3%B3.png',
        epg_id: 'AndorraTV.ad',
        country: 'ad',
        options: [
          {
            format: 'm3u8',
            url: 'https://videos.rtva.ad/live/rtva/playlist.m3u8'
          }
        ]
      },{
        name: 'Tec TV',
        logo: 'https://i.imgur.com/EGCq1wc.png',
        epg_id: 'TECTV.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv.initium.net.ar:3939/live/tectvmainlive.m3u8'
          }
        ]
      },{
        name: 'Net TV',
        logo: 'https://i.imgur.com/EWmshtx.png',
        epg_id: 'NETTV.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://unlimited1-us.dps.live/nettv/nettv.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'TV Universidad',
        logo: 'https://i.imgur.com/tvLHiAT.png',
        epg_id: 'TVUniversidad.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://stratus.stream.cespi.unlp.edu.ar/hls/tvunlp.m3u8'
          }
        ]
      },{
        name: 'El Trece',
        logo: 'https://i.imgur.com/ZK7AQFg.png',
        epg_id: 'ElTrece.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://live-01-02-eltrece.vodgc.net/eltrecetv/index.m3u8'
          }
        ]
      },{
        name: 'OE24',
        logo: 'https://i.imgur.com/8UTkcPn.png',
        epg_id: 'Oe24TV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://varoe24live.sf.apa.at/oe24-live1/oe24.smil/chunklist_b1900000.m3u8'
          }
        ]
      },{
        name: 'R9',
        logo: 'https://i.imgur.com/2fxVYsL.jpg',
        epg_id: 'R9.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://ms01.w24.at/R9/smil:liveeventR9.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Belros',
        logo: 'https://i.imgur.com/HWqxjGl.png',
        epg_id: 'BelRos.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://live2.mediacdn.ru/sr1/tro/playlist.m3u8'
          }
        ]
      },{
        name: 'Vitebsk Telekanal',
        logo: 'https://i.imgur.com/FXAqELU.jpg',
        epg_id: 'Vitebsk.by',
        country: 'by',
        options: [
          {
            format: 'm3u8',
            url: 'https://flu.vtv.by/tvt-non-by/tracks-v1a1/mono.m3u8'
          }
        ]
      },{
        name: 'BX1',
        logo: 'https://i.imgur.com/YjKqWru.png',
        epg_id: 'BX1.be',
        country: 'be',
        options: [
          {
            format: 'm3u8',
            url: 'https://59959724487e3.streamlock.net/stream/live/playlist.m3u8'
          }
        ]
      },{
        name: 'ALL Sports Brasil',
        logo: 'https://i.imgur.com/wULpnYR.png',
        epg_id: 'AllSports.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'https://5cf4a2c2512a2.streamlock.net/dgrau/dgrau/chunklist.m3u8'
          }
        ]
      },{
        name: 'AgroBrasil TV',
        logo: 'https://upload.wikimedia.org/wikipedia/pt/6/60/Logo_AgroBrasilTV.jpg',
        epg_id: 'AgroBrasilTV.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'http://45.162.230.234:1935/agrobrasiltv/agrobrasiltv/playlist.m3u8'
          }
        ]
      },{
        name: 'RBC',
        logo: 'https://portal.rbc1.com.br/public/portal/img/layout/logorbc.png',
        epg_id: 'rbc.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'http://rbc.directradios.com:1935/rbc/rbc/live.m3u8'
          }
        ]
      },{
        name: 'TV Câmara',
        logo: 'https://i.imgur.com/UpV2PRk.png',
        epg_id: 'TVCamara.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream3.camara.gov.br/tv1/manifest.m3u8'
          }
        ]
      },{
        name: 'TVE RS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Logotipo_da_TVE_RS.png',
        epg_id: 'tvers.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'http://selpro1348.procergs.com.br:1935/tve/stve/playlist.m3u8'
          }
        ]
      },{
        name: 'TV1 Bulgaria',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Tv1-new.png',
        epg_id: 'TV1.bg',
        country: 'bg',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv1.cloudcdn.bg/temp/livestream.m3u8'
          }
        ]
      },{
        name: 'CPAC',
        logo: 'https://i.imgur.com/AbdFD0S.png',
        epg_id: 'CPACEnglish.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://d7z3qjdsxbwoq.cloudfront.net/groupa/live/f9809cea-1e07-47cd-a94d-2ddd3e1351db/live.isml/.m3u8'
          }
        ]
      },{
        name: 'ICI RDI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/ICI_RDI_logo.svg/640px-ICI_RDI_logo.svg.png',
        epg_id: 'IciRDI.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://rcavlive.akamaized.net/hls/live/704025/xcanrdi/master.m3u8'
          }
        ]
      },{
        name: 'Télé Québec',
        logo: 'https://i.imgur.com/8grBWK9.png',
        epg_id: 'CIVMDT.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://bcovlive-a.akamaihd.net/575d86160eb143458d51f7ab187a4e68/us-east-1/6101674910001/playlist.m3u8'
          }
        ]
      },{
        name: 'Savoir Média',
        logo: 'https://i.imgur.com/pa4wOVY.png',
        epg_id: 'CFTUDT.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://hls.savoir.media/live/stream.m3u8'
          }
        ]
      },{
        name: 'ICI Montreal',
        logo: 'https://i.imgur.com/Z1b2TJD.png',
        epg_id: 'CBFTDT.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://amdici.akamaized.net/hls/live/873426/ICI-Live-Stream/master.m3u8'
          }
        ]
      },{
        name: 'Canal 1',
        logo: 'https://cloudfront-us-east-1.images.arcpublishing.com/gruponacion/2XI5OC6MQZFXXBDGMRRDOZSL2Q.jpg',
        epg_id: 'Canal1.cr',
        country: 'cr',
        options: [
          {
            format: 'm3u8',
            url: 'https://video20.klm99.com:3993/live/canal1crlive.m3u8'
          }
        ]
      },{
        name: '88 Stereo',
        logo: 'http://www.88stereo.com/wp-content/uploads/2017/05/88Stereo-logoweb.png',
        epg_id: '88stereo.cr',
        country: 'cr',
        options: [
          {
            format: 'm3u8',
            url: 'http://k3.usastreams.com/CableLatino/88stereo/playlist.m3u8'
          }
        ]
      },{
        name: 'CMC TV',
        logo: 'https://i.imgur.com/Fh2vawT.png',
        epg_id: 'CMCTV.hr',
        country: 'hr',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream.cmctv.hr:49998/cmc/live.m3u8'
          }
        ]
      },{
        name: 'RIK Sat',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_RIK_Sat_2017.svg/640px-Logo_RIK_Sat_2017.svg.png',
        epg_id: 'RIKSat.cy',
        country: 'cy',
        options: [
          {
            format: 'm3u8',
            url: 'https://l3.cloudskep.com/cybcsat/abr/playlist.m3u8'
          }
        ]
      },{
        name: 'BRT 1',
        logo: 'https://i.imgur.com/gOPAi2c.png',
        epg_id: 'BRT1.cy',
        country: 'cy',
        options: [
          {
            format: 'm3u8',
            url: 'https://sc-kuzeykibrissmarttv.ercdn.net/brt1hd/bant1/playlist.m3u8'
          }
        ]
      },{
        name: 'BRT 2',
        logo: 'https://i.imgur.com/t5kbIuj.png" tvg-id="BRT2.cy',
        epg_id: 'BRT2.cy',
        country: 'cy',
        options: [
          {
            format: 'm3u8',
            url: 'https://sc-kuzeykibrissmarttv.ercdn.net/brt2hd/bant1/playlist.m3u8'
          }
        ]
      },{
        name: 'JOJ Family',
        logo: 'https://i.imgur.com/IZHIAAj.png',
        epg_id: 'JojFamily.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.cdn.joj.sk/live/hls/family-540.m3u8'
          }
        ]
      },{
        name: 'Óčko',
        logo: 'https://i.imgur.com/iPmpsnN.png',
        epg_id: 'Ocko.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko/playlist.m3u8'
          }
        ]
      },{
        name: 'Óčko Star',
        logo: 'https://i.imgur.com/tGzQFWw.png',
        epg_id: 'OckoStar.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist.m3u8'
          }
        ]
      },{
        name: 'Óčko Expres',
        logo: 'https://i.imgur.com/e731JNS.png',
        epg_id: 'OckoExpres.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist.m3u8'
          }
        ]
      },{
        name: 'Praha TV',
        logo: 'https://www.praga2018.cz/wp-content/uploads/logo-prahatv.png',
        epg_id: 'PrahaTV.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream.polar.cz/prahatv/prahatvlive-1/playlist.m3u8'
          }
        ]
      },{
        name: 'Folketinget TV',
        logo: 'https://i.imgur.com/RqQDUzX.png',
        epg_id: 'TVfromtheDanishParliament.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdnapi.kaltura.com/p/2158211/sp/327418300/playManifest/entryId/1_24gfa7qq/protocol/https/format/applehttp/a.m3u8'
          }
        ]
      },{
        name: 'TV Sy',
        logo: 'https://i.imgur.com/k2jf591.png',
        epg_id: 'TVSYD.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tvsyd.dk/env/cluster-1-e.live.nvp1/live/hls/p/1956351/e/0_e9slj9wh/tl/main/st/0/t/rFEtaqAbdhUFGef_BNF4WQ/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV 2/Fyn',
        logo: 'https://i.imgur.com/4L6AIMH.png',
        epg_id: 'TV2Fyn.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tv2fyn.dk/env/cluster-1-e.live.nvp1/live/hls/p/1966291/e/0_vsfrv0zm/tl/main/st/0/t/EgP1FA1D39taZFVewCa42w/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV 2/Øst',
        logo: 'https://i.imgur.com/H9l6Ulw.png',
        epg_id: 'TV2Ost.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tveast.dk/env/cluster-1-e.live.nvp1/live/hls/p/1953381/e/0_zphj9q61/tl/main/st/0/t/THUB80e-ZMufZCE4pDhO0g/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV 2/Nord',
        logo: 'https://i.imgur.com/tEJ22UW.png',
        epg_id: 'TV2Nord.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tv2nord.dk/env/cluster-1-e.live.nvp1/live/hls/p/1956931/e/1_h9yfe7h2/tl/main/st/1/t/_FUn1YHQ6_P6lES4U6mmsA/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV 2 Kosmopol',
        logo: 'https://i.imgur.com/oVmCoKY.png',
        epg_id: 'TV2Kosmopol.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tv2lorry.dk/env/cluster-1-d.live.nvp1/live/hls/p/2045321/e/1_grusx1zd/tl/main/st/0/t/rCct87c-v2SFFCvQK1BBOg/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV/Midt-Vest',
        logo: 'https://i.imgur.com/OU7xIVa.png',
        epg_id: 'TVMidtvest.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tvmidtvest.dk/env/cluster-1-d.live.frp1/live/hls/p/1953371/e/1_9x5lzos9/tl/main/st/0/t/9MTEhotxVwKuatx1EVXdGg/index-s34.m3u8'
          }
        ]
      },{
        name: 'TV 2/Østjylland',
        logo: 'https://i.imgur.com/qEUXjHp.png',
        epg_id: 'TV2Ostjylland.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tvmidtvest.dk/env/cluster-1-d.live.frp1/live/hls/p/1953371/e/1_9x5lzos9/tl/main/st/0/t/9MTEhotxVwKuatx1EVXdGg/index-s34.m3u8'
          }
        ]
      },{
        name: 'TV 2/Bornholm',
        logo: 'https://i.imgur.com/cEOpXU6.png',
        epg_id: 'TV2Bornholm.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.tv2bornholm.dk/stream/live/playlist.m3u8'
          }
        ]
      },{
        name: 'Sport2U',
        logo: 'https://i.imgur.com/WW0lNk1.png',
        epg_id: 'sport2u.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream9.xdevel.com/video0s976916-1685/stream/playlist_dvr.m3u8'
          }
        ]
      },{
        name: 'Full Moon',
        logo: 'https://i.imgur.com/0xT7bZP.jpg',
        epg_id: 'full-moon.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://minerva-fullmoon-1-it.samsung.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Canale Europa',
        logo: 'https://i.imgur.com/Zw2ZIfz.jpg',
        epg_id: 'canale_europa.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://canaleeuropa-canaleeuropa-1-it.samsung.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Reuters TV',
        logo: 'https://i.imgur.com/AbvCnoH.png',
        epg_id: 'ReutersTV.us',
        country: 'us',
        options: [
          {
            format: 'm3u8',
            url: 'https://reuters-reutersnow-1-eu.rakuten.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'CBS News US',
        logo: 'https://i.imgur.com/nki2HDQ.png',
        epg_id: 'CBSNews.us',
        country: 'us',
        options: [
          {
            format: 'm3u8',
            url: 'https://cbsnews.akamaized.net/hls/live/2020607/cbsnlineup_8/master.m3u8'
          }
        ]
      },{
        name: 'PBS America',
        logo: 'https://i.imgur.com/J4zE5z9.jpg',
        epg_id: 'PBSAmerica.uk',
        country: 'gb',
        options: [
          {
            format: 'm3u8',
            url: 'https://pbs-samsunguk.amagi.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'TVM 3',
        logo: 'https://i.imgur.com/3v6iZE6.png',
        epg_id: 'TVM3.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'http://livevideo.infomaniak.com/streaming/livecast/tvm3/playlist.m3u8'
          }
        ]
      },{
        name: 'JOJ',
        logo: 'https://i.imgur.com/5BAWD0z.png',
        epg_id: 'TVJOJ.sk',
        country: 'sk',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.cdn.joj.sk/live/andromeda/joj-1080.m3u8'
          }
        ]
      },{
        name: 'JOJ Plus',
        logo: 'https://i.imgur.com/fKPliTj.png',
        epg_id: 'JOJPlus.sk',
        country: 'sk',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.cdn.joj.sk/live/andromeda/plus-1080.m3u8'
          }
        ]
      },{
        name: 'Telestar1',
        logo: 'https://i.imgur.com/UZQjEsd.png',
        epg_id: 'Telestar1.ro',
        country: 'ro',
        options: [
          {
            format: 'm3u8',
            url: 'http://89.47.97.15/telestar/telestar.m3u8'
          }
        ]
      },{
        name: 'Prima TV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Prima_TV_%28Rumaenien%29_Logo.svg/512px-Prima_TV_%28Rumaenien%29_Logo.svg.png',
        epg_id: 'PrimaTV.ro',
        country: 'ro',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream1.1616.ro:1945/prima/livestream/playlist.m3u8'
          }
        ]
      },{
        name: 'ADtv',
        logo: 'https://i.imgur.com/FvlcU3z.png',
        epg_id: 'adtv.pt',
        country: 'pt',
        options: [
          {
            format: 'm3u8',
            url: 'https://playout172.livextend.cloud/liveiframe/_definst_/ngrp:liveartvabr_abr/playlist.m3u8'
          }
        ]
      },{
        name: 'Frikanalen',
        logo: 'https://i.imgur.com/rY3Owxl.png',
        epg_id: 'Frikanalen.no',
        country: 'no',
        options: [
          {
            format: 'm3u8',
            url: 'https://frikanalen.no/stream/index.m3u8'
          }
        ]
      },{
        name: 'INTV',
        logo: 'https://i.imgur.com/K7BSjqY.png',
        epg_id: 'intvaustralia.com',
        country: 'mk',
        options: [
          {
            format: 'm3u8',
            url: 'http://tv1.intv.mk:1935/live/intv/index.m3u8'
          }
        ]
      },{
        name: 'Folk Club TV',
        logo: 'https://i.imgur.com/vkGFSl8.png',
        epg_id: 'folkclubtv.com',
        country: 'mk',
        options: [
          {
            format: 'm3u8',
            url: 'http://tv1.intv.mk:1935/live2/folkklub/index.m3u8'
          }
        ]
      },{
        name: 'TVCG MNE',
        logo: 'https://i.imgur.com/pf8VEwf.png',
        epg_id: 'TVCGMNE.me',
        country: 'me',
        options: [
          {
            format: 'm3u8',
            url: 'http://cdn3.bcdn.rs:1935/cgsat/smil:cgsat.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'TVCG 3',
        logo: 'https://i.imgur.com/XC7zVog.png',
        epg_id: 'Parlamentarnikanal.me',
        country: 'me',
        options: [
          {
            format: 'm3u8',
            url: 'https://parlament.rtcg.me:1936/pr/smil:parlament.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'TVCG 2',
        logo: 'https://i.imgur.com/WECmUKH.png',
        epg_id: 'TVCG2.me',
        country: 'me',
        options: [
          {
            format: 'm3u8',
            url: 'http://cdn3.bcdn.rs:1935/cg2/smil:cg2.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'NRT 4 Monclova',
        logo: 'https://i.imgur.com/IudKE0n.png',
        epg_id: 'noticiasnrt.com',
        country: 'mx',
        options: [
          {
            format: 'm3u8',
            url: 'https://59e88b197fb16.streamlock.net:4443/live/canal4/playlist.m3u8'
          }
        ]
      },{
        name: 'Alcarria TV',
        logo: 'https://i.imgur.com/zNSuxVZ.jpg',
        epg_id: 'AlcarriaTV.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'http://cls.alcarria.tv/live/alcarriatv-livestream.m3u8'
          }
        ]
      },{
        name: 'LRT Lituanica',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/LRT_Lituanica_Logo_2022.svg/640px-LRT_Lituanica_Logo_2022.svg.png',
        epg_id: 'LRTLituanica.lt',
        country: 'lt',
        options: [
          {
            format: 'm3u8',
            url: 'https://lituanica.lrt.lt/lituanica/master.m3u8'
          }
        ]
      },{
        name: 'EBS English',
        logo: 'https://i.imgur.com/qceaIf7.png',
        epg_id: 'EBSEnglish.kr',
        country: 'kr',
        options: [
          {
            format: 'm3u8',
            url: 'https://ebsonair.ebs.co.kr/plus3familypc/familypc1m/playlist.m3u8'
          }
        ]
      },{
        name: 'EBS Plus 2',
        logo: 'https://i.imgur.com/mgFRZFq.png',
        epg_id: 'EBSPlus2.kr',
        country: 'kr',
        options: [
          {
            format: 'm3u8',
            url: 'https://ebsonair.ebs.co.kr/plus2familypc/familypc1m/playlist.m3u8'
          }
        ]
      },{
        name: 'EBS Plus 1',
        logo: 'https://i.imgur.com/ImUHRG2.png',
        epg_id: 'EBSPlus1.kr',
        country: 'kr',
        options: [
          {
            format: 'm3u8',
            url: 'https://ebsonair.ebs.co.kr/plus1familypc/familypc1m/playlist.m3u8'
          }
        ]
      },{
        name: 'Arirang',
        logo: 'https://i.imgur.com/RuHZ6Dx.png',
        epg_id: 'ArirangTV.kr',
        country: 'kr',
        options: [
          {
            format: 'm3u8',
            url: 'http://amdlive.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'JIBS TV',
        logo: 'https://i.imgur.com/RVWpBoz.png',
        epg_id: 'JIBSTV.kr',
        country: 'kr',
        options: [
          {
            format: 'm3u8',
            url: 'http://123.140.197.22/stream/1/play.m3u8'
          }
        ]
      },{
        name: 'CJB TV',
        logo: 'https://i.imgur.com/MvxdZhX.png',
        epg_id: 'CJBTV.kr',
        country: 'kr',
        options: [
          {
            format: 'm3u8',
            url: 'http://1.222.207.80:1935/live/cjbtv/playlist.m3u8'
          }
        ]
      },{
        name: 'QVC',
        logo: 'https://i.imgur.com/B74hZKd.png',
        epg_id: 'QVCJapan.jp',
        country: 'jp',
        options: [
          {
            format: 'm3u8',
            url: 'http://cdn-live1.qvc.jp/iPhone/800/800.m3u8'
          }
        ]
      },{
        name: 'WLTV',
        logo: 'https://i.imgur.com/aL8jKtU.png',
        epg_id: 'wltv.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://5db313b643fd8.streamlock.net/WLTV/WLTV/playlist.m3u8'
          }
        ]
      },{
        name: 'Vuemme Tv',
        logo: 'https://i.imgur.com/x5A0xU6.png',
        epg_id: 'vuemmetv.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://5db313b643fd8.streamlock.net/Vuemme/Vuemme/playlist.m3u8'
          }
        ]
      },{
        name: 'Vintage Radio Tv',
        logo: 'https://i.imgur.com/n3LtBNT.jpg',
        epg_id: 'vintageradiotv.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://5f22d76e220e1.streamlock.net/vintageradiotv/vintageradiotv/playlist.m3u8'
          }
        ]
      },{
        name: 'VB33',
        logo: 'https://i.imgur.com/ygDuIxU.png',
        epg_id: 'vb33.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.ipstream.it/vb33/vb33.stream/playlist.m3u8'
          }
        ]
      },{
        name: 'Vera Tv',
        logo: 'https://i.imgur.com/djMvkvN.png',
        epg_id: 'veratv.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'http://wms.shared.streamshow.it/veratv/veratv/playlist.m3u8'
          }
        ]
      },{
        name: 'Umbria Tv',
        logo: 'https://i.imgur.com/kccGe02.png',
        epg_id: 'umbria-tv.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://umbriatv.stream.rubidia.it:8083/live/umbriatv/playlist.m3u8'
          }
        ]
      },{
        name: 'Tvr Xenon',
        logo: 'https://i.imgur.com/kLzW1Pf.jpg',
        epg_id: 'tvr-xenon.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn3-ger.azotosolutions.com/cdnedge4/live4/playlist.m3u8'
          }
        ]
      },{
        name: 'TVR Più TeleRegione',
        logo: 'https://i.imgur.com/Wzb5qaT.png',
        epg_id: 'tvr-piu-teleregione.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://dacastmmd.mmdlive.lldns.net/dacastmmd/a14a9d0455b34b02842e05e6a4ad0572/playlist.m3u8'
          }
        ]
      },{
        name: 'Tva Vicenza',
        logo: 'https://i.imgur.com/FtFuPCC.png',
        epg_id: 'tva-vicenza.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'http://fms.tvavicenza.it:1935/live/diretta_1/playlist.m3u8'
          }
        ]
      },{
        name: 'Tv Yes',
        logo: 'https://i.imgur.com/1wsO8U7.png',
        epg_id: 'tv-yes.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream1.aswifi.it/radioyes/live/index.m3u8'
          }
        ]
      },{
        name: 'Tv Qui Modena',
        logo: 'https://i.imgur.com/4bOYlfg.png',
        epg_id: 'tv-qui-modena',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://59d7d6f47d7fc.streamlock.net/tvqui/tvqui/playlist.m3u8'
          }
        ]
      },{
        name: 'Tv Prato',
        logo: 'https://i.imgur.com/zDeVpZd.png',
        epg_id: 'tv-prato.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.mariatvcdn.com/tvprato/2db0dd5674586686a867ec52c3aa8e06.sdp/mono.m3u8'
          }
        ]
      },{
        name: 'Tuscia Sabina 2000Tv',
        logo: 'https://i.imgur.com/Tq5nEAy.png',
        epg_id: 'tuscia-sabina-200tv.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'http://ts2000tv.streaming.nextware.it:8081/ts2000tv/ts2000tv/chunks.m3u8'
          }
        ]
      },{
        name: 'Tele Nord Genova',
        logo: 'https://i.imgur.com/I6yegEK.png',
        epg_id: 'tele-nord-genova.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://5db313b643fd8.streamlock.net/Telenord/Telenord/playlist.m3u8'
          }
        ]
      },{
        name: 'Tele Mantova',
        logo: 'https://i.imgur.com/bkSPcs4.png',
        epg_id: 'tele-mantova.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://5ce9406b73c33.streamlock.net/TeleMantova/livestream/playlist.m3u8'
          }
        ]
      },{
        name: 'Senato TV',
        logo: 'https://i.imgur.com/FoQoNZW.png',
        epg_id: 'SenatoTV.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://senato-live.morescreens.com/SENATO_1_001/playlist.m3u8'
          }
        ]
      },{
        name: 'Knesset',
        logo: 'https://i.imgur.com/PEdXHSE.png',
        epg_id: 'Knesset.il',
        country: 'il',
        options: [
          {
            format: 'm3u8',
            url: 'https://contact.gostreaming.tv/Knesset/myStream/playlist.m3u8'
          }
        ]
      },{
        name: 'חינוכית',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/KanHinuchit.svg/640px-KanHinuchit.svg.png',
        epg_id: 'KanEducational.il',
        country: 'il',
        options: [
          {
            format: 'm3u8',
            url: 'https://kan23.media.kan.org.il/hls/live/2024691/2024691/master.m3u8'
          }
        ]
      },{
        name: 'مكان 33',
        logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/MeKan_33_logo_2017.png',
        epg_id: 'Makan33.il',
        country: 'il',
        options: [
          {
            format: 'm3u8',
            url: 'https://makan.media.kan.org.il/hls/live/2024680/2024680/master.m3u8'
          }
        ]
      },{
        name: 'ערוץ 14',
        logo: 'https://i.imgur.com/Iq2Kb69.png',
        epg_id: 'Now14.il',
        country: 'il',
        options: [
          {
            format: 'm3u8',
            url: 'https://now14.g-mana.live/media/91517161-44ab-4e46-af70-e9fe26117d2e/mainManifest.m3u8'
          }
        ]
      },{
        name: 'ערוץ 13',
        logo: 'https://upload.wikimedia.org/wikipedia/he/thumb/1/17/Reshet13Logo2022.svg/559px-Reshet13Logo2022.svg.png',
        epg_id: 'Channel13.il',
        country: 'il',
        options: [
          {
            format: 'm3u8',
            url: 'https://d2xg1g9o5vns8m.cloudfront.net/out/v1/0855d703f7d5436fae6a9c7ce8ca5075/index.m3u8'
          }
        ]
      },{
        name: 'כאן 11',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kan11Logo.svg/640px-Kan11Logo.svg.png',
        epg_id: 'Kan11.il',
        country: 'il',
        options: [
          {
            format: 'm3u8',
            url: 'https://kan11.media.kan.org.il/hls/live/2024514/2024514/master.m3u8'
          }
        ]
      },{
        name: 'Zagros TV',
        logo: 'https://i.imgur.com/UjIuIQX.png',
        epg_id: 'ZagrosTV.iq',
        country: 'iq',
        options: [
          {
            format: 'm3u8',
            url: 'https://5a3ed7a72ed4b.streamlock.net/zagrostv/SMIL:myStream.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'iNEWS',
        logo: 'https://i.imgur.com/PeuBkaH.png',
        epg_id: 'INews.iq',
        country: 'iq',
        options: [
          {
            format: 'm3u8',
            url: 'https://svs.itworkscdn.net/inewsiqlive/inewsiq.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Dijlah Tarab',
        logo: 'https://i.imgur.com/2SBjjBQ.png',
        epg_id: 'DijlahTarab.iq',
        country: 'iq',
        options: [
          {
            format: 'm3u8',
            url: 'https://ghaasiflu.online/tarab/tracks-v1a1/playlist.m3u8'
          }
        ]
      },{
        name: 'Al-Sharqiya',
        logo: 'https://i.imgur.com/bPYyXNf.png',
        epg_id: 'AlSharqiya.iq',
        country: 'iq',
        options: [
          {
            format: 'm3u8',
            url: 'https://5d94523502c2d.streamlock.net/home/mystream/playlist.m3u8'
          }
        ]
      },{
        name: 'Al-Sharqiya News',
        logo: 'https://i.imgur.com/P6p17ZY.jpg',
        epg_id: 'AlSharqiyaNews.iq',
        country: 'iq',
        options: [
          {
            format: 'm3u8',
            url: 'https://5d94523502c2d.streamlock.net/alsharqiyalive/mystream/playlist.m3u8'
          }
        ]
      },{
        name: 'Press TV',
        logo: 'https://i.imgur.com/X3YP2Gg.png',
        epg_id: 'PressTV.ir',
        country: 'ir',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdnlive.presstv.ir/cdnlive/smil:cdnlive.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'ABP News',
        logo: 'https://i.imgur.com/DKHUFVQ.png',
        epg_id: 'ABPNews.in',
        country: 'in',
        options: [
          {
            format: 'm3u8',
            url: 'https://abplivetv.akamaized.net/hls/live/2043010/hindi/master.m3u8'
          }
        ]
      },{
        name: 'RÚV 2',
        logo: 'https://i.imgur.com/yDKRuXQ.png',
        epg_id: 'RUV2.is',
        country: 'is',
        options: [
          {
            format: 'm3u8',
            url: 'https://ruvlive.akamaized.net/out/v1/2ff7673de40f419fa5164498fae89089/index.m3u8'
          }
        ]
      },{
        name: 'TV Eger',
        logo: 'https://i.imgur.com/GUVW073.png',
        epg_id: 'TVEger.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'http://stream.tveger.hu:8010/live.m3u8'
          }
        ]
      },{
        name: 'Bajai TV',
        logo: 'https://i.imgur.com/cyReGWh.png',
        epg_id: 'BajaiTV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://cloudfront41.lexanetwork.com:1344/relay01/livestream002.sdp/playlist.m3u8'
          }
        ]
      },{
        name: 'DTV',
        logo: 'https://i.imgur.com/YSpqmSO.png',
        epg_id: 'DTV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'http://cloudfront44.lexanetwork.com:1732/hlsrelay003/hls/livestream.sdp.m3u8'
          }
        ]
      },{
        name: 'Zalaegerszeg TV',
        logo: 'https://zegtv.hu/wp-content/themes/assembly/images/zegtv-logo.png',
        epg_id: 'ZalaegerszegiTV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://cloudfront44.lexanetwork.com:1344/freerelay/zegtv.sdp/playlist.m3u8'
          }
        ]
      },{
        name: 'Lóverseny közvetítés',
        logo: 'https://kincsempark.hu/wp-content/uploads/2016/11/fejlec_logo_f-1.png',
        epg_id: 'Lóversenyközvetítés.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://cloudfront41.lexanetwork.com:1344/xrelay/loverseny2.sdp/playlist.m3u8'
          }
        ]
      },{
        name: 'Kecskemét TV',
        logo: 'https://kecskemetitv.hu/templates/kecskemetitv/img/ktv_logo.png',
        epg_id: 'KecskemetiTV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://eurobioinvest.hu:444/live/ktv.m3u8'
          }
        ]
      },{
        name: 'Gyöngyös TV',
        logo: 'https://i.imgur.com/RHgaPCk.png',
        epg_id: 'GyongyosiTV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://cloudfront41.lexanetwork.com:1344/relay02/livestream005.sdp/playlist.m3u8?key=hkNHP'
          }
        ]
      },{
        name: 'AlföldTV',
        logo: 'http://www.dealood.com/content/uploads/images/March2019/5c9721a07ea87-images-large.png',
        epg_id: 'AlföldTV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://cloudfront41.lexanetwork.com:1344/relay01/livestream006.sdp/playlist.m3u8'
          }
        ]
      },{
        name: 'CityTV (Belváros Lipótváros)',
        logo: 'https://www.citytv.hu/images/logo.png',
        epg_id: 'CityTV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://citytv.hu/media/live/stream.m3u8'
          }
        ]
      },{
        name: '16TV',
        logo: 'http://www.16tv.hu/images/xlogo-green.png.pagespeed.ic.79XBdS6JYn.png',
        epg_id: '16TV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://cloudfront44.lexanetwork.com:1344/freerelay/16tv.sdp/playlist.m3u8'
          }
        ]
      },{
        name: 'Hegyvidék TV',
        logo: 'https://hegyvidektv.hu/wp-content/uploads/2020/08/hegyvidek.jpg',
        epg_id: 'HegyvidekTV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv.hegyvidek.hu/hvtv/hvstream.m3u8'
          }
        ]
      },{
        name: 'TV7 Bekescsaba',
        logo: 'https://i.imgur.com/G9Ib5K3.png',
        epg_id: 'TV7Bekescsaba.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream.y5.hu/stream/stream_bekescsaba/stream.m3u8'
          }
        ]
      },{
        name: 'Balaton TV',
        logo: 'https://i.imgur.com/ip8L5Vt.jpg',
        epg_id: 'BalatonTV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream.iptvservice.eu/hls/balatontv.m3u8'
          }
        ]
      },{
        name: 'ATV',
        logo: 'https://onlinestream.live/logos/4739.png',
        epg_id: 'ATV.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'http://streamservers.atv.hu:80/atvlive/atvstream_2_aac/playlist.m3u8'
          }
        ]
      },{
        name: 'Kontra',
        logo: 'https://i.imgur.com/zMgczHY.png',
        epg_id: 'KontraChannel.gr',
        country: 'gr',
        options: [
          {
            format: 'm3u8',
            url: 'http://kontralive.siliconweb.com/live/kontratv/playlist.m3u8'
          }
        ]
      },{
        name: 'Open TV',
        logo: 'https://i.imgur.com/T99OSnk.png',
        epg_id: 'OpenTV.gr',
        country: 'gr',
        options: [
          {
            format: 'm3u8',
            url: 'https://liveopencloud.siliconweb.com/1/ZlRza2R6L2tFRnFJ/eWVLSlQx/hls/live/playlist.m3u8'
          }
        ]
      },{
        name: 'Skai TV',
        logo: 'https://i.imgur.com/TSg7B8X.png',
        epg_id: 'SkaiTV.gr',
        country: 'gr',
        options: [
          {
            format: 'm3u8',
            url: 'https://skai-live.siliconweb.com/media/cambria4/index.m3u8'
          }
        ]
      },{
        name: 'Star',
        logo: 'https://i.imgur.com/CJOtJlL.png',
        epg_id: 'StarChannel.gr',
        country: 'gr',
        options: [
          {
            format: 'm3u8',
            url: 'https://livestar.siliconweb.com/media/star1/star1mediumhd.m3u8'
          }
        ]
      },{
        name: 'NDR International',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo_NDR_Fernsehen_2017.svg/578px-Logo_NDR_Fernsehen_2017.svg.png',
        epg_id: 'NDRFernsehenInternational.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://ndrint.akamaized.net/hls/live/2020766/ndr_int/index.m3u8'
          }
        ]
      },{
        name: 'DW Deutsch+',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Deutsche_Welle_Logo.svg/320px-Deutsche_Welle_Logo.svg.png',
        epg_id: 'DWDeutschPlus.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://dwamdstream110.akamaized.net/hls/live/2017971/dwstream110/index.m3u8'
          }
        ]
      },{
        name: 'DW Deutsch',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Deutsche_Welle_Logo.svg/320px-Deutsche_Welle_Logo.svg.png',
        epg_id: 'DWDeutsch.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://dwamdstream111.akamaized.net/hls/live/2017972/dwstream111/index.m3u8'
          }
        ]
      },{
        name: 'SR',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/SR_Fernsehen.svg/639px-SR_Fernsehen.svg.png',
        epg_id: 'SRFernsehen.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://srfs.akamaized.net/hls/live/689649/srfsgeo/index.m3u8'
          }
        ]
      },{
        name: 'NDR Schleswig-Holstein',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo_NDR_Fernsehen_2017.svg/578px-Logo_NDR_Fernsehen_2017.svg.png',
        epg_id: 'NDRFernsehenSchleswigHolstein.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://mcdn.ndr.de/ndr/hls/ndr_fs/ndr_sh/master.m3u8'
          }
        ]
      },{
        name: 'NDR Niedersachsen',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo_NDR_Fernsehen_2017.svg/578px-Logo_NDR_Fernsehen_2017.svg.png',
        epg_id: 'NDRFernsehenNiedersachsen.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://mcdn.ndr.de/ndr/hls/ndr_fs/ndr_nds/master.m3u8'
          }
        ]
      },{
        name: 'NDR Mecklenburg-Vorpommern',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo_NDR_Fernsehen_2017.svg/578px-Logo_NDR_Fernsehen_2017.svg.png',
        epg_id: 'NDRFernsehenMecklenburgVorpommern.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://mcdn.ndr.de/ndr/hls/ndr_fs/ndr_mv/master.m3u8'
          }
        ]
      },{
        name: 'NDR Hamburg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo_NDR_Fernsehen_2017.svg/578px-Logo_NDR_Fernsehen_2017.svg.png',
        epg_id: 'NDRFernsehenHamburg.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://mcdn.ndr.de/ndr/hls/ndr_fs/ndr_hh/master.m3u8'
          }
        ]
      },{
        name: 'HR',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Hr-fernsehen_Logo_2015.svg/640px-Hr-fernsehen_Logo_2015.svg.png',
        epg_id: 'HRFernsehen.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://hrhls.akamaized.net/hls/live/2024525/hrhls/master.m3u8'
          }
        ]
      },{
        name: 'BR Süd',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Logo_BR_Fernsehen_2021.svg/768px-Logo_BR_Fernsehen_2021.svg.png',
        epg_id: 'BRFernsehenSud.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://brcdn.vo.llnwd.net/br/fs/bfs_sued/hls/de/master.m3u8'
          }
        ]
      },{
        name: 'Deluxe Lounge HD',
        logo: 'https://i.imgur.com/JN6Kd0q.png',
        epg_id: 'DeluxeLoungeHD.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=2664'
          }
        ]
      },{
        name: 'Schlager Deluxe',
        logo: 'https://i.imgur.com/YPpgUOg.png',
        epg_id: 'SchlagerDeluxe.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/26658/26658_264_live.m3u8'
          }
        ]
      },{
        name: 'ARD Alpha',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/ARD_alpha_Logo.jpg" tvg-id="ARDalpha.de',
        epg_id: 'ARD-Alpha.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://mcdn.br.de/br/fs/ard_alpha/hls/de/master.m3u8'
          }
        ]
      },{
        name: 'Das Erste',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Das_Erste_2014.svg/640px-Das_Erste_2014.svg.png',
        epg_id: 'DasErste.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://mcdn.daserste.de/daserste/de/master.m3u8'
          }
        ]
      },{
        name: 'Formula',
        logo: 'https://i.imgur.com/fsqBn8G.png',
        epg_id: 'Formula.ge',
        country: 'ge',
        options: [
          {
            format: 'm3u8',
            url: 'https://c4635.cdn.xsg.ge/c4635/TVFormula/index.m3u8'
          }
        ]
      },{
        name: 'Mtavari Arkhi',
        logo: 'https://i.imgur.com/tLtGnJW.png',
        epg_id: 'MtavariArkhi.ge',
        country: 'ge',
        options: [
          {
            format: 'm3u8',
            url: 'https://bozztv.com/36bay2/mtavariarxi/playlist.m3u8'
          }
        ]
      },{
        name: 'Imedi TV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Imlogo_2020.png',
        epg_id: 'ImediTV.ge',
        country: 'ge',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv.cdn.xsg.ge/imedihd/index.m3u8'
          }
        ]
      },{
        name: 'First Channel - Education (2TV)',
        logo: 'https://upload.wikimedia.org/wikipedia/ka/c/c9/2_Tv_Logo.jpg',
        epg_id: '2TV.ge',
        country: 'ge',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv.cdn.xsg.ge/gpb-2tv/index.m3u8'
          }
        ]
      },{
        name: 'First Channel (1TV)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Pirveli_Arkhi_Logo_2022.svg/512px-Pirveli_Arkhi_Logo_2022.svg.png',
        epg_id: '1TV.ge',
        country: 'ge',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv.cdn.xsg.ge/gpb-1tv/index.m3u8'
          }
        ]
      },{
        name: 'TV5 Monde Europe',
        logo: 'https://i.imgur.com/uPmwTo9.png',
        epg_id: 'TV5MondeEurope.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://ott.tv5monde.com/Content/HLS/Live/channel(europe)/index.m3u8'
          }
        ]
      },{
        name: 'TV5 Monde Info',
        logo: 'https://i.imgur.com/NcysrWH.png',
        epg_id: 'TV5MondeInfo.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://ott.tv5monde.com/Content/HLS/Live/channel(info)/index.m3u8'
          }
        ]
      },{
        name: 'CGTN Français',
        logo: 'https://i.imgur.com/fMsJYzl.png',
        epg_id: 'CGTNFrench.cn',
        country: 'cn',
        options: [
          {
            format: 'm3u8',
            url: 'https://news.cgtn.com/resource/live/french/cgtn-f.m3u8'
          }
        ]
      },{
        name: 'När-TV',
        logo: 'https://i.imgur.com/Ht5yePq.png',
        epg_id: 'NarTV.fi',
        country: 'fi',
        options: [
          {
            format: 'm3u8',
            url: 'https://streaming.nartv.fi/live/ngrp:NAR_TV.stream_all/playlist.m3u8'
          }
        ]
      },{
        name: 'MTV Uutiset Live',
        logo: 'https://i.imgur.com/IyB6mIb.png',
        epg_id: 'MTVUutiset.fi',
        country: 'fi',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.streaming.a2d.tv/asset/20025962.isml/.m3u8'
          }
        ]
      },{
        name: 'Himlen TV7',
        logo: 'https://i.imgur.com/a4iNVXA.png',
        epg_id: 'HimlenTV7.fi',
        country: 'fi',
        options: [
          {
            format: 'm3u8',
            url: 'https://vod.tv7.fi/tv7-se/_definst_/smil:tv7-se.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Taivas TV7',
        logo: 'https://i.imgur.com/a4iNVXA.png',
        epg_id: 'TaivasTV7.fi',
        country: 'fi',
        options: [
          {
            format: 'm3u8',
            url: 'https://vod.tv7.fi/tv7-fi/_definst_/smil:tv7-fi.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'OnniTV',
        logo: 'https://i.imgur.com/HzILf2H.png',
        epg_id: 'KotiTV.fi',
        country: 'fi',
        options: [
          {
            format: 'm3u8',
            url: 'https://kotitv.digitacdn.net/amlst:kotitv.amlst/playlist.m3u8?organizationId=83459409&suiteItemId=83459780'
          }
        ]
      },{
        name: 'TBN Baltia',
        logo: 'https://i.imgur.com/rKBaK56.png',
        epg_id: 'TBNBaltia.ee',
        country: 'ee',
        options: [
          {
            format: 'm3u8',
            url: 'http://dc.tbnbaltia.eu:8088/dvr/rewind-21600.m3u8'
          }
        ]
      },{
        name: 'Life TV Europe',
        logo: 'https://i.imgur.com/JhrTB82.png',
        epg_id: 'LifeTVEurope.ee',
        country: 'ee',
        options: [
          {
            format: 'm3u8',
            url: 'https://lifetv.bitflip.ee/live/stream1.m3u8'
          }
        ]
      },{
        name: 'Life TV Estonia',
        logo: 'https://i.imgur.com/JhrTB82.png',
        epg_id: 'LifeTV.ee',
        country: 'ee',
        options: [
          {
            format: 'm3u8',
            url: 'https://lifetv.bitflip.ee/live/stream2.m3u8'
          }
        ]
      },{
        name: 'Taevas TV7',
        logo: 'https://i.imgur.com/usXedIj.png',
        epg_id: 'TaevasTV7.ee',
        country: 'ee',
        options: [
          {
            format: 'm3u8',
            url: 'https://vod.tv7.fi/tv7-ee/_definst_/smil:tv7-ee.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'ETV+',
        logo: 'https://i.imgur.com/YAubPlU.png',
        epg_id: 'ETVPlus.ee',
        country: 'ee',
        options: [
          {
            format: 'm3u8',
            url: 'http://sb.err.ee/live/etvpluss.m3u8'
          }
        ]
      },{
        name: 'ETV2',
        logo: 'https://i.imgur.com/fUjGHDa.png',
        epg_id: 'ETV2.ee',
        country: 'ee',
        options: [
          {
            format: 'm3u8',
            url: 'http://sb.err.ee/live/etv2.m3u8'
          }
        ]
      },{
        name: 'ETV',
        logo: 'https://i.imgur.com/5URjPgG.png',
        epg_id: 'ETV.ee',
        country: 'ee',
        options: [
          {
            format: 'm3u8',
            url: 'http://sb.err.ee/live/etv.m3u8'
          }
        ]
      },{
        name: 'Canal RTVD 4',
        logo: 'https://static.wikia.nocookie.net/logopedia/images/4/4e/CERTV_4_2015.png',
        epg_id: 'Canal4RD.do',
        country: 'do',
        options: [
          {
            format: 'm3u8',
            url: 'https://protvradiostream.com:1936/canal4rd-1/ngrp:canal4rd-1_all/playlist.m3u8'
          }
        ]
      },{
        name: 'Viaplay xtra',
        logo: 'https://i.imgur.com/kzZHsLp.png',
        epg_id: 'ViaplayXtra.uk',
        country: 'gb',
        options: [
          {
            format: 'm3u8',
            url: 'https://i.mjh.nz/SamsungTVPlus/GBBB4300001NX.m3u8'
          }
        ]
      },{
        name: 'TG4',
        logo: 'https://i.imgur.com/DslaAXr.png',
        epg_id: 'TG4.ie',
        country: 'ie',
        options: [
          {
            format: 'm3u8',
            url: 'https://dx4452e0qv6r9.cloudfront.net/tg4_vod_national.m3u8'
          }
        ]
      },{
        name: 'Oireachtas TV',
        logo: 'https://i.imgur.com/aC4fsCI.png',
        epg_id: 'OireachtasTV.ie',
        country: 'ie',
        options: [
          {
            format: 'm3u8',
            url: 'https://d33zah5htxvoxb.cloudfront.net/el/live/oirtv/hls.m3u8'
          }
        ]
      },{
        name: 'Catalunya Ràdio',
        logo: 'https://images.radio.orange.com/radios/large_radio_catalonia.png',
        epg_id: 'CatalunyaRadio.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://directes-radio-int.ccma.cat/live-content/catalunya-radio-hls/master.m3u8'
          }
        ]
      },{
        name: 'Canal Sur Radio',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Canal_Sur_Radio.png',
        epg_id: 'CanalSurRadio.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdnlive.codev8.net/rtvalive/smil:channel4.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Euskadi Irratia',
        logo: 'https://images11.eitb.eus/multimedia/images/2012/01/24/602517/602517_euskadi_irratia_logo4_foto610x342.jpg',
        epg_id: 'EuskadiIrratia.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://multimedia.eitb.eus/live-content/euskadirratia-hls/master.m3u8'
          }
        ]
      },{
        name: 'Cadena 100',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cadena100.svg/1200px-Cadena100.svg.png',
        epg_id: 'Cadena100.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://cadena100-cope.flumotion.com/chunks.m3u8'
          }
        ]
      },{
        name: 'Europa FM',
        logo: 'https://fotografias.atresmediapublicidad.com/clipping/cmsimages01/2022/10/05/49FAFB71-2DCC-44D8-AB04-FC5C8EEBFAE4/nuevo-logo-europa-fmdegradado-fondo-blanco_58.jpg',
        epg_id: 'EuropaFM.e',
        country: 'ses',
        options: [
          {
            format: 'm3u8',
            url: 'https://livefastly-webs.europafm.com/europafm/audio/master.m3u8'
          }
        ]
      },{
        name: 'Rock FM',
        logo: 'https://rockfm-cdnsta.agilecontent.com/rockfm-frontend/public/assets/img/default-image-f7d2568e0307650b0c23f03e46649312.svg',
        epg_id: 'RockFM.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://rockfm-cope.flumotion.com/playlist.m3u8'
          }
        ]
      },{
        name: 'Radio Clásica RNE',
        logo: 'https://myradioonline.es/public/uploads/radio_img/radio-clasica/fb_cover.jpg',
        epg_id: 'RadioClasicaRNE.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://rtvelivestream.akamaized.net/rtvesec/rne/rne_r2_main.m3u8'
          }
        ]
      },{
        name: 'Catalunya Informació',
        logo: 'https://static.mytuner.mobi/media/tvos_radios/AHxQzFyFbJ.png',
        epg_id: 'CatalunyaInformacio.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://directes-radio-int.ccma.cat/live-content/catalunya-informacio-hls/master.m3u8'
          }
        ]
      },{
        name: 'Catalunya Música',
        logo: 'https://static.mytuner.mobi/media/tvos_radios/Ld3QR4ngWx.png',
        epg_id: 'CatalunyaMusica.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://directes-radio-int.ccma.cat/live-content/catalunya-musica-hls/master.m3u8'
          }
        ]
      },{
        name: 'RAC1',
        logo: 'https://d2xcuvj0f1yuza.cloudfront.net/2020/01/LOGO-RAC1.png',
        epg_id: 'RAC1.es',
        country: 'es',
        options: [
          {
            format: 'mp3',
            url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/RAC_1.mp3'
          }
        ]
      },{
        name: 'Radio Marca',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/46/bf/80/46bf8000-16fe-bc2c-733c-fbdfe66ae5a5/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
        epg_id: 'RadioMarca.es',
        country: 'es',
        options: [
          {
            format: 'mp3',
            url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/RADIOMARCA_NACIONAL.mp3'
          }
        ]
      },{
        name: 'Radio Tele-Taxi',
        logo: 'https://myradioonline.es/public/uploads/radio_img/radio-teletaxi/fb_cover.jpg',
        epg_id: 'RadioTeleTaxi.es',
        country: 'es',
        options: [
          {
            format: 'mp3',
            url: 'https://radiott-web.streaming-pro.com:6103/radiott.mp3'
          }
        ]
      },{
        name: 'SER Catalunya',
        logo: 'https://sdmedia.playser.cadenaser.com/playser/image/20231/20/1674202565250_957.jpeg',
        epg_id: 'SERCatalunya.es',
        country: 'es',
        options: [
          {
            format: 'mp3',
            url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/SER_CAT.mp3'
          }
        ]
      },{
        name: 'COPE Barcelona Miramar',
        logo: 'https://static.mytuner.mobi/media/tvos_radios/SapDLY5pB3.png',
        epg_id: 'COPEBarcelona',
        country: 'es',
        options: [
          {
            format: 'mp3',
            url: 'https://wecast-b01-04.flumotion.com/copesedes/barcelona.mp3'
          }
        ]
      },{
        name: 'Canal Blau Ràdio',
        logo: 'https://fegp.cat/wp-content/uploads/images/radio-canal-blau.png',
        epg_id: 'CanalBlauRadio.es',
        country: 'es',
        options: [
          {
            format: 'mp3',
            url: 'http://streaming.enantena.com:8000/canalblau128.mp3'
          }
        ]
      },{
        name: 'Radio Maricel',
        logo: 'https://www.radiomaricel.cat/wp-content/uploads/2022/10/maricel_logo_a_03072019-scaled.jpg',
        epg_id: 'RadioMaricel.es',
        country: 'es',
        options: [
          {
            format: 'mp3',
            url: 'https://radioserver.radiomaricel.cat/proxy/radio_maricel?mp=/stream.mp3'
          }
        ]
      },{
        name: 'Euronews',
        logo: 'https://staticcyl.euronews.com/wp-content/uploads/2022/12/euronews-logo-our-brands-neon-300x132.png',
        epg_id: 'Euronews.es',
        country: 'es',
        options: [
          {
            format: 'youtube',
            url: 'https://www.youtube.com/watch?v=O9mOtdZ-nSk'
          }
        ]
      },{
        name: 'Euronews',
        logo: 'https://staticcyl.euronews.com/wp-content/uploads/2022/12/euronews-logo-our-brands-neon-300x132.png',
        epg_id: 'Euronews.uk',
        country: 'gb',
        options: [
          {
            format: 'youtube',
            url: 'https://www.youtube.com/watch?v=pykpO5kQJ98'
          }
        ]
      },{
        name: 'Euronews',
        logo: 'https://staticcyl.euronews.com/wp-content/uploads/2022/12/euronews-logo-our-brands-neon-300x132.png',
        epg_id: 'Euronews.pt',
        country: 'pt',
        options: [
          {
            format: 'youtube',
            url: 'https://www.youtube.com/watch?v=fLtn2L7OdeI'
          }
        ]
      },{
        name: 'Euronews',
        logo: 'https://staticcyl.euronews.com/wp-content/uploads/2022/12/euronews-logo-our-brands-neon-300x132.png',
        epg_id: 'Euronews.fr',
        country: 'fr',
        options: [
          {
            format: 'youtube',
            url: 'https://www.youtube.com/watch?v=NiRIbKwAejk'
          }
        ]
      },{
        name: '12 канал (Channel12)',
        logo: 'https://i.imgur.com/OA9hm6e.png',
        epg_id: 'Channel12.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://12channel.bonus-tv.ru/cdn/12channel/playlist.m3u8'
          }
        ]
      },{
        name: '24 Техно (T24)',
        logo: 'https://i.imgur.com/1W6R14o.png',
        epg_id: 'T24.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/24techno/index.m3u8'
          }
        ]
      },{
        name: '365 дней ТВ (365 Days TV)',
        logo: 'https://i.imgur.com/NfnAiTR.png',
        epg_id: '365daysTV.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/365day/index.m3u8'
          }
        ]
      },{
        name: 'HD Life',
        logo: 'https://i.imgur.com/tKgmhxh.png',
        epg_id: 'HDL.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/hdlife/index.m3u8'
          }
        ]
      },{
        name: 'Da Vinci Russia',
        logo: 'https://i.imgur.com/iBx7K1M.png',
        epg_id: 'DaVinci.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/davinci/index.m3u8'
          }
        ]
      },{
        name: 'Leomax 24',
        logo: 'https://i.imgur.com/qU9ohQu.png',
        epg_id: 'Leomax24.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tvshops.bonus-tv.ru/cdn/shop24/playlist.m3u8'
          }
        ]
      },{
        name: 'MMA-TV.com',
        logo: 'https://i.imgur.com/QhdxNsB.png',
        epg_id: 'MMATVcom.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/m1/index.m3u8'
          }
        ]
      },{
        name: 'Music Box Russia',
        logo: 'https://i.imgur.com/iWJdeD1.png',
        epg_id: 'MusicBoxRussia.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://strm.yandex.ru/kal/rmbox/rmbox0.m3u8'
          }
        ]
      },{
        name: 'Астрахань.Ru Sport (Astrahan.Ru Sport)',
        logo: 'https://i.imgur.com/BKaEtqL.png',
        epg_id: 'AstrahanRuSport.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://streaming.astrakhan.ru/astrakhanrusporthd/playlist.m3u8'
          }
        ]
      },{
        name: 'Астрахань.Ru TV (Astrahan.Ru TV)',
        logo: 'https://i.imgur.com/w4ys6zm.png',
        epg_id: 'AstrahanRuTV.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://streaming.astrakhan.ru/astrakhanrulivehd/playlist.m3u8'
          }
        ]
      },{
        name: 'Белгород 24 (Belgorod 24)',
        logo: 'https://i.imgur.com/EEirvyx.png',
        epg_id: 'Belgorod24.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'http://belnovosti.cdn.easyhoster.ru:8080/stream.m3u8'
          }
        ]
      },{
        name: 'Бокс ТВ (Boks TV)',
        logo: 'https://i.imgur.com/R1UjyfX.png',
        epg_id: 'BoksTV.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/boxtv/index.m3u8'
          }
        ]
      },{
        name: 'БСТ (BST)',
        logo: 'https://i.imgur.com/IDotHmQ.png',
        epg_id: 'BST.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://bsttv.bonus-tv.ru/cdn/bst/playlist.m3u8'
          }
        ]
      },{
        name: 'Дагестан (Dagestan)',
        logo: 'https://i.imgur.com/jumkRvc.png',
        epg_id: 'Dagestan.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://dagestan.mediacdn.ru/cdn/dagestan/playlist.m3u8'
          }
        ]
      },{
        name: 'Детский мир (Detski Mir)',
        logo: 'https://i.imgur.com/bBVEP0S.png',
        epg_id: 'Detskimir.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/detskymir/index.m3u8'
          }
        ]
      },{
        name: 'Диалоги о рыбалке (Dialogi o rybalke)',
        logo: 'https://i.imgur.com/OuBtnGU.png',
        epg_id: 'Dialogiorybalke.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://strm.yandex.ru/kal/dialogi/dialogi0.m3u8'
          }
        ]
      },{
        name: 'Дождь (TV Rain)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Tvrain.svg/512px-Tvrain.svg.png',
        epg_id: 'TVRain.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://1527562093.rsc.cdn77.org/transcode/ngrp:ses_all/playlist.m3u8'
          }
        ]
      },{
        name: 'Еврокино (Eurokino)',
        logo: 'https://i.imgur.com/8LPtPf6.png',
        epg_id: 'Evrokino.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/eurokino/index.m3u8'
          }
        ]
      },{
        name: 'Звезда (Zvezda)',
        logo: 'https://i.imgur.com/4PAcpfM.png',
        epg_id: 'Zvezda.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tvchannelstream1.tvzvezda.ru/cdn/tvzvezda/playlist.m3u8'
          }
        ]
      },{
        name: 'Иллюзион+ (Illusions+)',
        logo: 'https://i.imgur.com/9GvuHQ5.png',
        epg_id: 'IllusionPlus.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/illuzionplus/index.m3u8'
          }
        ]
      },{
        name: 'Индийское Кино (Indiyskoye Kino)',
        logo: 'https://i.imgur.com/LL8GyCh.png',
        epg_id: 'IndiyskoyeKino.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/indiyskoekino/index.m3u8'
          }
        ]
      },{
        name: 'Конный Мир (Konniy Mir)',
        logo: 'https://i.imgur.com/X6otbK0.png',
        epg_id: 'KonniyMir.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'http://cdn-01.bonus-tv.ru/konnyimir/playlist.m3u8'
          }
        ]
      },{
        name: 'Кто есть кто (Kto est kto)',
        logo: 'https://i.imgur.com/PmD17UQ.png',
        epg_id: 'Ktoestkto.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://tbs01-edge11.itdc.ge/ktoestkto/index.m3u8'
          }
        ]
      },{
        name: 'Миллет (Millet)',
        logo: 'https://i.imgur.com/hUjLRLy.png',
        epg_id: 'Millet.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.trkmillet.ru/millet/index.m3u8'
          }
        ]
      },{
        name: 'Мир 24 (Mir 24)',
        logo: 'https://i.imgur.com/dj9c8Yd.png',
        epg_id: 'Mir24.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'http://hls.mirtv.cdnvideo.ru/mirtv-parampublish/mir24_2500/playlist.m3u8'
          }
        ]
      },{
        name: 'Мир (Mir)',
        logo: 'https://i.imgur.com/AqWaJT8.png',
        epg_id: 'Mir.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://strm.yandex.ru/kal/mir24/mir0.m3u8'
          }
        ]
      },{
        name: 'Мир Белагорья (MirBelogorya)',
        logo: 'https://mirbelogorya.ru/images/logo/Logo_Mir_Belogorya_purple_gradient.png',
        epg_id: 'MirBelogorya.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'http://mirbelogorya.ru:8080/mirbelogorya/index.m3u8'
          }
        ]
      },{
        name: 'МТВ (Волгоград)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/MTV-2021.svg/512px-MTV-2021.svg.png',
        epg_id: 'MTV.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'http://hls.volgograd1vtv.cdnvideo.ru/volgograd1vtv/volgograd1vtv.sdp/playlist.m3u8'
          }
        ]
      },{
        name: 'Наша Сибирь (Nasha Sibir)',
        logo: 'https://i.imgur.com/uXOz2d9.png',
        epg_id: 'NashaSibir.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://strm.yandex.ru/kal/sibir/sibir0.m3u8'
          }
        ]
      },{
        name: 'Небеса ТВ7 (Nebesa TV7)',
        logo: 'https://www.nebesatv7.com/wp-content/themes/tv7-theme/assets/img/logo_nebesa_short.png',
        epg_id: 'NebesaTV7.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://vod.tv7.fi/tv7-ru/tv7-ru.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Нижний Новгород 24 (Nizhniy Novgorod 24)',
        logo: 'https://i.imgur.com/ZWgPVIC.png',
        epg_id: 'NizhniyNovgorod24.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://live-vestinn.cdnvideo.ru/vestinn/nn24-khl/playlist.m3u8'
          }
        ]
      },{
        name: 'Ника ТВ (Nika TV)',
        logo: 'https://i.imgur.com/dccsFAu.png',
        epg_id: 'NikaTV.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://live-nikatv.cdnvideo.ru/nikatv/nikatv.sdp/playlist.m3u8'
          }
        ]
      },{
        name: '20 Minutes TV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/20_Minutes_TV_IDF_logo_%282023%29.png/320px-20_Minutes_TV_IDF_logo_%282023%29.png',
        epg_id: '20MinutesTV.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://lives.digiteka.com/stream/86d3e867-a272-496b-8412-f59aa0104771/index.m3u8'
          }
        ]
      },{
        name: 'Alpe d\'Huez TV',
        logo: 'https://i.imgur.com/090tCQ5.png',
        epg_id: 'AlpedHuezTV.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://edge.vedge.infomaniak.com/livecast/ik:adhtv/chunklist.m3u8'
          }
        ]
      },{
        name: 'BIP TV',
        logo: 'https://i.imgur.com/YQjm4U5.png',
        epg_id: 'BIPTV.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://biptv.tv/live/biptvstream_orig/index.m3u8'
          }
        ]
      },{
        name: 'Caillou',
        logo: 'https://i.imgur.com/RgKaoe4.png',
        epg_id: 'Caillou.es',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://dhx-caillou-1-es.samsung.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Canal 32',
        logo: 'https://i.imgur.com/lAsE6kN.png',
        epg_id: 'Canal32.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'http://livevideo.vedge.infomaniak.com/livecast/ik:canal32/manifest.m3u8'
          }
        ]
      },{
        name: 'Central TV',
        logo: 'https://i.imgur.com/2DU22BN.png',
        epg_id: 'CentralTV.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'http://cdn2.ujjina.com:1935/iptvcentraltv/livecentraltvtv/playlist.m3u8'
          }
        ]
      },{
        name: 'Chérie 25',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Logo_Ch%C3%A9rie_25.svg/512px-Logo_Ch%C3%A9rie_25.svg.png',
        epg_id: 'Cherie25.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://cherie25.nrjaudio.fm/hls/live/2038375/c25/FHD.m3u8'
          }
        ]
      },{
        name: 'ILTV',
        logo: 'https://i.imgur.com/fVhrJHK.png',
        epg_id: 'ILTV.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.creacast.com/iltv/smil:iltv.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'KTO',
        logo: 'https://i.imgur.com/EY6TsdV.png',
        epg_id: 'KTO.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://live-kto.akamaized.net/hls/live/2033284/KTO/master.m3u8'
          }
        ]
      },{
        name: 'MDL',
        logo: 'https://i.imgur.com/REN30bx.png',
        epg_id: 'MDL.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'http://tv.mondeduloisir.fr:1935/tixtv/smil:web.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Museum TV',
        logo: 'https://i.imgur.com/WbjURLo.png',
        epg_id: 'MuseumTV.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://live2.creacast.com/museum-france/smil:museum-france.smil/master.m3u8'
          }
        ]
      },{
        name: 'NRJ 12',
        logo: 'https://i.imgur.com/Lv66Gcv.png',
        epg_id: 'NRJ12.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://nrj12.nrjaudio.fm/hls/live/2038374/nrj_12/master.m3u8'
          }
        ]
      },{
        name: 'P2M TV',
        logo: 'https://i.imgur.com/TrecSeG.png',
        epg_id: 'P2MTV.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://vdo2.pro-fhi.net:3207/stream/play.m3u8'
          }
        ]
      },{
        name: 'Rakuten TV Films Action',
        logo: 'https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/03804a72867cda7ba7b5',
        epg_id: 'RakutenTVActionMoviesFrance.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://rakuten-actionmovies-7-eu.rakuten.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Rakuten TV Top Films',
        logo: 'https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/03804a72867cda7ba7b5',
        epg_id: 'RakutenTVTopMoviesFrance.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://rakuten-topfree-7-eu.rakuten.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Vià Matélé',
        logo: 'https://i.imgur.com/XVCV9rj.png',
        epg_id: 'ViaMatele.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://5dd226f8f01e8.streamlock.net/via-matele-live/matelelive_1080/playlist.m3u8'
          }
        ]
      },{
        name: 'Vià MoselleTV',
        logo: 'https://i.imgur.com/hrm5QnU.png',
        epg_id: 'MoselleTV.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.creacast.com/mirabelletv/smil:mirabelletv.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Vià Télé Paese',
        logo: 'https://i.imgur.com/TLZsAKK.png',
        epg_id: 'viaTelePaese.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://srv.webtvmanager.fr:3118/live/viatelepaeselive.m3u8'
          }
        ]
      },{
        name: 'Vosges Télévision',
        logo: 'https://i.imgur.com/7y7ancc.png',
        epg_id: 'VosgesTV.fr',
        country: 'fr',
        options: [
          {
            format: 'm3u8',
            url: 'https://vosgestv.live-kd.com/live/vosgestv/vosgestv/playlist.m3u8'
          }
        ]
      },{
        name: 'Arise News',
        logo: 'https://i.imgur.com/B5IXKIb.png',
        epg_id: 'AriseNews.uk',
        country: 'gb',
        options: [
          {
            format: 'm3u8',
            url: 'https://liveedge-arisenews.visioncdn.com/live-hls/arisenews/arisenews/arisenews_web/master.m3u8'
          }
        ]
      },{
        name: 'DiscoverFilm',
        logo: 'https://i.imgur.com/oMnpsQ5.png',
        epg_id: 'DiscoverFilm.uk',
        country: 'gb',
        options: [
          {
            format: 'm3u8',
            url: 'https://discoverfilm-discoverfilm-1-nl.samsung.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Alpenland TV',
        logo: 'https://i.imgur.com/NPB6ciB.png',
        epg_id: 'AlpenlandTV.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://edge14.vedge.infomaniak.com/livecast/ik:alpen-wellelivestream/playlist.m3u8'
          }
        ]
      },{
        name: 'Canal 9 (en français)',
        logo: 'https://i.imgur.com/TNciMh2.png',
        epg_id: 'Canal9.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://edge.vedge.infomaniak.com/livecast/ik:livehd/master.m3u8'
          }
        ]
      },{
        name: 'Canal Alpha Jura',
        logo: 'https://i.imgur.com/eQ8xHK9.jpg',
        epg_id: 'CanalAlphaJura.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://canalalphaju.vedge.infomaniak.com/livecast/ik:canalalphaju/playlist.m3u8'
          }
        ]
      },{
        name: 'Canal Alpha Neuchatel',
        logo: 'https://i.imgur.com/eQ8xHK9.jpg',
        epg_id: 'CanalAlphaNeuchatel.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://edge.vedge.infomaniak.com/livecast/ik:canalalpha/playlist.m3u8'
          }
        ]
      },{
        name: 'Carac 1',
        logo: 'https://www.bejart.ch/wp-content/uploads//carac-400x304.png',
        epg_id: 'Carac1.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://edge.vedge.infomaniak.com/livecast/ik:event/.m3u8'
          }
        ]
      },{
        name: 'Carac 2',
        logo: 'https://www.bejart.ch/wp-content/uploads//carac-400x304.png',
        epg_id: 'Carac2.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://edge.vedge.infomaniak.com/livecast/ik:onefmmd/.m3u8'
          }
        ]
      },{
        name: 'Carac 3',
        logo: 'https://www.bejart.ch/wp-content/uploads//carac-400x304.png',
        epg_id: 'Carac3.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://edge.vedge.infomaniak.com/livecast/ik:lfmmd/.m3u8'
          }
        ]
      },{
        name: 'Carac 4',
        logo: 'https://www.bejart.ch/wp-content/uploads//carac-400x304.png',
        epg_id: 'Carac4.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://edge.vedge.infomaniak.com/livecast/ik:compack_media_1/.m3u8'
          }
        ]
      },{
        name: 'Couleur 3',
        logo: 'https://i.imgur.com/VOIwYYd.png',
        epg_id: 'Couleur3.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8'
          }
        ]
      },{
        name: 'Die Neue Zeit',
        logo: 'https://cdn.hd-plus.de/senderlogos/bright-cropped/24464-1.png',
        epg_id: 'DieNeueZeitTV.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://bild-und-ton.stream/die-neue-zeit-tv-live/smil:dnz-de.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Kanal 9 (auf Deutsch)',
        logo: 'https://i.imgur.com/TNciMh2.png',
        epg_id: 'Kanal9.ch',
        country: 'ch',
        options: [
          {
            format: 'm3u8',
            url: 'https://edge.vedge.infomaniak.com/livecast/ik:livesd2/master.m3u8'
          }
        ]
      },{
        name: 'Misión Vida TV',
        logo: 'https://i.imgur.com/8JgBuTm.png',
        epg_id: 'MisionVidaTV.uy',
        country: 'uy',
        options: [
          {
            format: 'm3u8',
            url: 'https://59825a54e4454.streamlock.net:8443/jorge854/jorge854/playlist.m3u8'
          }
        ]
      },{
        name: '13 Siam Thai',
        logo: 'https://i.imgur.com/FvEp1S2.png',
        epg_id: '13SiamThai.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.x2.co.th/live/13livetv-th.m3u8'
          }
        ]
      },{
        name: '@TV',
        logo: 'https://i.imgur.com/svjrvw0.png',
        epg_id: 'AtTV.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'http://49.0.87.24:1936/HDAttv/Attv/playlist.m3u8'
          }
        ]
      },{
        name: 'ALTV',
        logo: 'https://i.imgur.com/MCbCSWv.png',
        epg_id: 'ALTV.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://thaipbs-ujxrch.cdn.byteark.com/live/playlist_1080p/index.m3u8'
          }
        ]
      },{
        name: 'ASTV News 1',
        logo: 'https://i.imgur.com/NNxzCPk.png',
        epg_id: 'News1.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'http://news1.live14.com/stream/news1.m3u8'
          }
        ]
      },{
        name: 'Channel 5',
        logo: 'https://i.imgur.com/wOIaqg7.png',
        epg_id: 'Channel5.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://639bc5877c5fe.streamlock.net/tv5hdlive/tv5hdlive/playlist.m3u8'
          }
        ]
      },{
        name: 'Channel 7',
        logo: 'https://i.imgur.com/tehHdZN.png',
        epg_id: 'Channel7.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'http://streaming-hwc.ch7.com/livech7hd/HD_1080p.m3u8'
          }
        ]
      },{
        name: 'Chomyut Channel',
        logo: 'https://i.imgur.com/Zb9Yfn2.png',
        epg_id: 'ChomyutChannel.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'http://49.0.87.24:1936/HDJomyut/Jomyut/playlist.m3u8'
          }
        ]
      },{
        name: 'DLTV 1',
        logo: 'https://i.imgur.com/nLzdGeX.png',
        epg_id: 'DLTV1.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv01.m3u8'
          }
        ]
      },{
        name: 'DLTV 2',
        logo: 'https://i.imgur.com/lDBSTfE.png',
        epg_id: 'DLTV2.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv02.m3u8'
          }
        ]
      },{
        name: 'DLTV 3',
        logo: 'https://i.imgur.com/wmrxerm.png',
        epg_id: 'DLTV3.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv03.m3u8'
          }
        ]
      },{
        name: 'DLTV 4',
        logo: 'https://i.imgur.com/WkpoQhU.png',
        epg_id: 'DLTV4.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv04.m3u8'
          }
        ]
      },{
        name: 'DLTV 5',
        logo: 'https://i.imgur.com/J1E89jX.png',
        epg_id: 'DLTV5.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv05.m3u8'
          }
        ]
      },{
        name: 'DLTV 6',
        logo: 'https://i.imgur.com/qeIHWC0.png',
        epg_id: 'DLTV6.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv06.m3u8'
          }
        ]
      },{
        name: 'DLTV 7',
        logo: 'https://i.imgur.com/OjYwMe3.png',
        epg_id: 'DLTV7.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv07.m3u8'
          }
        ]
      },{
        name: 'DLTV 8',
        logo: 'https://i.imgur.com/xIwn5Ha.png',
        epg_id: 'DLTV8.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv08.m3u8'
          }
        ]
      },{
        name: 'DLTV 9',
        logo: 'https://i.imgur.com/yPeSAry.png',
        epg_id: 'DLTV9.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv09.m3u8'
          }
        ]
      },{
        name: 'DLTV 10',
        logo: 'https://i.imgur.com/TgN81Zr.png',
        epg_id: 'DLTV10.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv10.m3u8'
          }
        ]
      },{
        name: 'DLTV 11',
        logo: 'https://i.imgur.com/hFk2b5s.png',
        epg_id: 'DLTV11.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv11.m3u8'
          }
        ]
      },{
        name: 'DLTV 12',
        logo: 'https://i.imgur.com/ITt6lY7.png',
        epg_id: 'DLTV12.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv12.m3u8'
          }
        ]
      },{
        name: 'DLTV 13',
        logo: 'https://i.imgur.com/asB5w3v.png',
        epg_id: 'DLTV13.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv13.m3u8'
          }
        ]
      },{
        name: 'DLTV 14',
        logo: 'https://i.imgur.com/HOjZRNS.png',
        epg_id: 'DLTV14.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv14.m3u8'
          }
        ]
      },{
        name: 'DLTV 15',
        logo: 'https://i.imgur.com/onJi2b6.png',
        epg_id: 'DLTV15.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-live.dltv.ac.th/dltv15.m3u8'
          }
        ]
      },{
        name: 'ETV',
        logo: 'https://i.imgur.com/Dsgpo4I.png',
        epg_id: 'ETV.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'http://150.95.66.20:1935/live/livestream/playlist.m3u8'
          }
        ]
      },{
        name: 'Good Idea TV',
        logo: 'https://i.imgur.com/ETgVyTy.png',
        epg_id: 'GoodIdeaTV.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'http://stream1.ai-net.net:1935/gtv1/_definst_/smil:gtv.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Mangorn',
        logo: 'https://i.imgur.com/Mmtx65h.png',
        epg_id: 'Mangorn.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'http://49.0.87.24:1936/HDDragon/Dragon/playlist.m3u8'
          }
        ]
      },{
        name: 'NBT 11 Central',
        logo: 'https://i.imgur.com/8hYQIxS.png',
        epg_id: 'NBT11Central.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-edge-ott.prd.go.th/live_vlc/smil:01f1-8b4b-971e-aa35-d5fa.smil/playlist.m3u8?DVR'
          }
        ]
      },{
        name: 'Suwannabhumi Channel',
        logo: 'https://i.imgur.com/6AGKP0A.png',
        epg_id: 'SuwannabhumiChannel.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.bangkokstream.com:19360/suwannabhumi/suwannabhumi.m3u8'
          }
        ]
      },{
        name: 'Top News',
        logo: 'https://i.imgur.com/tRFnV9M.png',
        epg_id: 'TopNews.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.topnews.co.th/hls/topnews_a_720.m3u8'
          }
        ]
      },{
        name: 'White Channel',
        logo: 'https://i.imgur.com/Chx0AV9.png',
        epg_id: 'WhiteChannel.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'http://symc-cdn.violin.co.th:1935/tndedge/whitechannel/chunklist.m3u8'
          }
        ]
      },{
        name: 'Zabb Channel',
        logo: 'https://i.imgur.com/4TMtUjW.png',
        epg_id: 'ZabbChannel.th',
        country: 'th',
        options: [
          {
            format: 'm3u8',
            url: 'https://vdo.plathong.net/flash7057/flash7057/playlist.m3u8'
          }
        ]
      },{
        name: 'A2 CNN',
        logo: 'https://i.imgur.com/TgO3Lzi.png',
        epg_id: 'A2CNN.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv.a2news.com/live/smil:a2cnnweb.stream.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'ALPO',
        logo: 'https://i.imgur.com/Pr4ixiA.png',
        epg_id: 'AlpoTV.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'https://5d00db0e0fcd5.streamlock.net/7236/7236/playlist.m3u8'
          }
        ]
      },{
        name: 'CNA',
        logo: 'https://codeit.al/wp-content/uploads/2020/08/cna.png',
        epg_id: 'CNA.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'https://live1.mediadesk.al/cnatvlive.m3u8'
          }
        ]
      },{
        name: 'Kanali 7',
        logo: 'https://i.imgur.com/rL2v9pM.png',
        epg_id: 'Kanali7.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'https://fe.tring.al/delta/105/out/u/1200_1.m3u8'
          }
        ]
      },{
        name: 'News 24 Albania',
        logo: 'https://i.imgur.com/PWGMnzW.jpg',
        epg_id: 'News24.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'http://tv.balkanweb.com:8081/news24/livestream/playlist.m3u8'
          }
        ]
      },{
        name: 'Ora News',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ora_News_%28Albania%29.svg/512px-Ora_News_%28Albania%29.svg.png',
        epg_id: 'OraNews.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'https://live1.mediadesk.al/oranews.m3u8'
          }
        ]
      },{
        name: 'Panorama TV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Panorama_logo.svg/512px-Panorama_logo.svg.png',
        epg_id: 'PanoramaTV.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'http://198.244.188.94/panorama/livestream/playlist.m3u8'
          }
        ]
      },{
        name: 'Report TV',
        logo: 'https://i.imgur.com/C9lM1KP.png',
        epg_id: 'ReportTV.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'https://deb10stream.duckdns.org/hls/stream.m3u8'
          }
        ]
      },{
        name: 'Tropoja TV',
        logo: 'https://i.imgur.com/D3hNOVS.png',
        epg_id: 'TropojaTelevizion.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.prostream.al/al/smil:tropojatv.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'TV 7 Albania',
        logo: 'https://i.imgur.com/k9WqPLZ.png',
        epg_id: 'TV7Albania.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'http://media.az-mediaserver.com:1935/7064/7064/playlist.m3u8'
          }
        ]
      },{
        name: 'TV Apollon',
        logo: 'https://i.imgur.com/gUz2AjM.png',
        epg_id: 'TVApollon.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.apollon.tv/Apollon-WEB/video.m3u8?token=tnt3u76re30d2'
          }
        ]
      },{
        name: 'Vizion Plus',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Vizion_Plus.svg/512px-Vizion_Plus.svg.png',
        epg_id: 'VizionPlus.al',
        country: 'al',
        options: [
          {
            format: 'm3u8',
            url: 'https://fe.tring.al/delta/105/out/u/rdghfhsfhfshs.m3u8'
          }
        ]
      },{
        name: '2GB Sydney',
        logo: 'https://i.ibb.co/jwM8DFG/2GB-1.png',
        epg_id: '2GB.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://2gblive.akamaized.net/hls/live/2033805/2GB/index.m3u8'
          }
        ]
      },{
        name: '3AW Melbourne',
        logo: 'https://i.imgur.com/Z4MdB0S.png',
        epg_id: '3AW.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://3awlive.akamaized.net/hls/live/2032295/3AW/index.m3u8'
          }
        ]
      },{
        name: '6PR Perth',
        logo: 'https://i.imgur.com/Q9iCxg1.png',
        epg_id: '6PR.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://6prlive.akamaized.net/hls/live/2033806/6PR/index.m3u8'
          }
        ]
      },{
        name: 'AUS Tamil TV',
        logo: 'https://i.imgur.com/7xcDrJw.png',
        epg_id: 'AUSTamilTV.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://bk7l2pn7dx53-hls-live.5centscdn.com/austamil/fe01ce2a7fbac8fafaed7c982a04e229.sdp/playlist.m3u8'
          }
        ]
      },{
        name: 'Ausbiz TV',
        logo: 'https://i.imgur.com/8vGGdB0.png',
        epg_id: 'AusbizTV.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://ausbiztv-ausbiz-1-nz.samsung.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Channel 44',
        logo: 'https://i.imgur.com/P2wUGh9.png',
        epg_id: 'Channel44.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://d1k6kax80wecy5.cloudfront.net/WFqZJc/index.m3u8'
          }
        ]
      },{
        name: 'Folk Klub',
        logo: 'https://i.imgur.com/Seq7Od7.png',
        epg_id: 'FolkKlubTV.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'http://tv1.intv.mk:1935/live2/folkklub/index.m3u8'
          }
        ]
      },{
        name: 'INTV Australia',
        logo: 'https://i.imgur.com/1nJl0Pv.png',
        epg_id: 'INTVAustralia.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'http://tv1.intv.mk:1935/live/intv/index.m3u8'
          }
        ]
      },{
        name: 'Racing.com',
        logo: 'https://i.imgur.com/Q55HX1O.png',
        epg_id: 'Racingcom.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://racingvic-i.akamaized.net/hls/live/598695/racingvic/index1500.m3u8'
          }
        ]
      },{
        name: 'Sky News Extra 1',
        logo: 'https://i.imgur.com/ZsPb8nL.png',
        epg_id: 'SkyNewsExtra1.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://skynewsau-live.akamaized.net/hls/live/2002689/skynewsau-extra1/master.m3u8'
          }
        ]
      },{
        name: 'Sky News Extra 2',
        logo: 'https://i.imgur.com/ZsPb8nL.png',
        epg_id: 'SkyNewsExtra2.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://skynewsau-live.akamaized.net/hls/live/2002690/skynewsau-extra2/master.m3u8'
          }
        ]
      },{
        name: 'Sky News Extra 3',
        logo: 'https://i.imgur.com/ZsPb8nL.png',
        epg_id: 'SkyNewsExtra3.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://skynewsau-live.akamaized.net/hls/live/2002691/skynewsau-extra3/master.m3u8'
          }
        ]
      },{
        name: 'Tastemade Australia',
        logo: '',
        epg_id: 'TastemadeAustralia.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://tmint-aus-samsungau.amagi.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Ticker News',
        logo: 'https://i.imgur.com/z7M0QxV.png',
        epg_id: 'tickerNews.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01486-tickernews-tickernewsweb-ono/playlist.m3u8'
          }
        ]
      },{
        name: 'Balkan Radio Salzburg',
        logo: 'https://i.imgur.com/UDyxgXf.png',
        epg_id: 'BalkanRadioSalzburg.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://channel.streams.ovh:1936/balkanradiosalzburgtv/balkanradiosalzburgtv/playlist.m3u8'
          }
        ]
      },{
        name: 'Dorf TV',
        logo: 'https://i.imgur.com/L0q19NR.png',
        epg_id: 'DorfTV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream.openplayout.org/hls/dorftv/live.m3u8'
          }
        ]
      },{
        name: 'FS1 Salzburg',
        logo: 'https://i.imgur.com/74gMaPK.png',
        epg_id: 'FS1Salzburg.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'http://stream.fs1.tv:8080/hls/webstream.m3u8'
          }
        ]
      },{
        name: 'Hitradio Ö3',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hitradio_%C3%963.svg/512px-Hitradio_%C3%963.svg.png',
        epg_id: 'HitradioO3.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://studiocam-oe3.mdn.ors.at/out/u/studiocam_oe3/q6a/manifest_1.m3u8'
          }
        ]
      },{
        name: 'Krone.TV',
        logo: 'https://kel.at/wp-content/uploads/2020/08/krone.png',
        epg_id: 'KroneTV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://kronetv.mdn.ors.at/out/u/kronetv-nodrm.m3u8'
          }
        ]
      },{
        name: 'Kurier TV',
        logo: 'https://i.imgur.com/c53h8cz.png',
        epg_id: 'KurierTV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://schautv.mdn.ors.at/out/u/schautv-nodrm.m3u8'
          }
        ]
      },{
        name: 'Ländle TV',
        logo: 'https://i.imgur.com/omLVQ4r.png',
        epg_id: 'LandleTV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://streaming13.huberwebmedia.at/LiveApp/streams/985585225397790082777809.m3u8'
          }
        ]
      },{
        name: 'oe24 TV',
        logo: '',
        epg_id: 'Oe24TV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://varoe24live.sf.apa.at/oe24-live1/oe24.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Okto TV',
        logo: 'https://www.europadialog.eu/wp-content/uploads/2015/02/OKTO_Logo-weiss_MailChimp.png',
        epg_id: 'OktoTV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn3.wowza.com/1/MHFtazJReW5rOFhP/N2NWNDZ2/hls/live/playlist.m3u8'
          }
        ]
      },{
        name: 'RTV',
        logo: '',
        epg_id: 'RTV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'http://iptv.rtv-ooe.at/stream.m3u8'
          }
        ]
      },{
        name: 'Schladming-Dachstein TV',
        logo: 'https://i.ibb.co/VjnzhMM/Logo-Schl-Dachstein-TV-HP-JPG.jpg',
        epg_id: 'SchladmingDachsteinTV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://m317.video-stream-hosting.de/gzSoftware-live/_definst_/smil:livestream.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Uppera Balkan',
        logo: 'https://i.imgur.com/eqcmi5G.png',
        epg_id: 'UpperaBalkan.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'http://89.187.168.245:8080/live/sUPPERchannel2/index.m3u8'
          }
        ]
      },{
        name: 'W24',
        logo: 'https://i.imgur.com/FpVNrxk.png',
        epg_id: 'W24.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://ms01.w24.at/W24/smil:liveevent.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Fireplace 4k with Crackling Fire Sounds',
        logo: '',
        epg_id: '',
        country: '',
        options: [
          {
            format: 'youtube',
            url: 'https://www.youtube.com/watch?v=O9palxot6BU'
          }
        ]
      },{
        name: 'Christmas Fireplace Music',
        logo: '',
        epg_id: '',
        country: '',
        options: [
          {
            format: 'youtube',
            url: 'https://www.youtube.com/watch?v=c0MrSpTWc8o'
          }
        ]
      },{
        name: 'Live Webcam around the World',
        logo: '',
        epg_id: '',
        country: '',
        options: [
          {
            format: 'youtube',
            url: 'https://www.youtube.com/watch?v=8KGXSjtS5pk'
          }
        ]
      },{
        name: 'Popworld TV',
        logo: 'https://i.imgur.com/LQB6G3s.jpg',
        epg_id: 'POPWorldTV.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://www.youtube.com/watch?v=8KGXSjtS5pk'
          }
        ]
      },{
        name: 'Rakuten TV Action Movies',
        logo: '',
        epg_id: 'RakutenTVActionMoviesSpain.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://rakuten-actionmovies-2-es.samsung.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Rakuten TV Comedy Movies',
        logo: '',
        epg_id: 'RakutenTVComedyMoviesSpain.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://rakuten-comedymovies-2-es.samsung.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Rakuten TV Drama Movies',
        logo: '',
        epg_id: 'RakutenTVDramaMoviesSpain.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://rakuten-tvshows-2-es.samsung.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Rakuten TV Family Movies',
        logo: '',
        epg_id: 'RakutenTVFamilyMoviesSpain.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://rakuten-family-2-es.samsung.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'XPTV 1',
        logo: 'https://i.imgur.com/Ty7GkoN.png',
        epg_id: 'XPTV1.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://janus.xpbroadcasting.com:8443/hls/xptv1.m3u8'
          }
        ]
      },{
        name: 'XPTV 2',
        logo: 'https://i.imgur.com/74Z8ATB.png',
        epg_id: 'XPTV1.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://janus.xpbroadcasting.com:8443/hls/xptv2.m3u8'
          }
        ]
      },{
        name: 'XPTV US',
        logo: 'https://i.imgur.com/1m7kDmc.png',
        epg_id: 'XPTVUS.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://janus.xpbroadcasting.com:8443/hls/xptvUS.m3u8'
          }
        ]
      },{
        name: 'Vallés Oriental TV',
        logo: 'https://i.imgur.com/1g2Z64L.png',
        epg_id: 'VOTV.es',
        country: 'es',
        options: [
          {
            format: 'm3u8',
            url: 'https://ingest2-video.streaming-pro.com/votv/streaming_web/playlist.m3u8'
          }
        ]
      },{
        name: '1-2-3 TV',
        logo: 'https://i.imgur.com/slSUDNX.png',
        epg_id: '123tv.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://123tv-mx1.flex-cdn.net/index.m3u8'
          }
        ]
      },{
        name: '1Almere TV',
        logo: 'https://i.imgur.com/XfkbTrU.png',
        epg_id: '1AlmereTV.nl',
        country: 'nl',
        options: [
          {
            format: 'm3u8',
            url: 'https://d3472rjicrodic.cloudfront.net/nlpo/clr-nlpo/709d5260/index.m3u8'
          }
        ]
      },{
        name: '1Twente TV',
        logo: 'https://i.imgur.com/ftiuNK3.png',
        epg_id: '1TwenteTV.nl',
        country: 'nl',
        options: [
          {
            format: 'm3u8',
            url: 'https://ms2.mx-cd.net/dtv-10/198-989148/1Twente_TV.smil/playlist.m3u8'
          }
        ]
      },{
        name: '2M Monde',
        logo: 'https://i.imgur.com/MvpntzA.png',
        epg_id: '2MInternational.ma',
        country: 'ma',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/2m_monde/hls_video_ts_tuhawxpiemz257adfc/2m_monde.m3u8'
          }
        ]
      },{
        name: '2TV',
        logo: 'https://i.imgur.com/FJBL6zI.png',
        epg_id: '2TV.ge',
        country: 'ge',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv.cdn.xsg.ge/gpb-2tv/index.m3u8'
          }
        ]
      },{
        name: '4DmásNoticias TV',
        logo: 'https://i.ibb.co/1fb5BtN/unnamed.png',
        epg_id: '4DmasNoticiasTV.py',
        country: 'py',
        options: [
          {
            format: 'm3u8',
            url: 'https://rds3.desdeparaguay.net/4dmasnoticiastv/4dmasnoticiastv/playlist.m3u8'
          }
        ]
      },{
        name: '4FUN TV',
        logo: 'https://i.imgur.com/rI1wo2l.png',
        epg_id: '4FunTV.pl',
        country: 'pl',
        options: [
          {
            format: 'm3u8',
            url: 'https://rds3.desdeparaguay.net/4dmasnoticiastv/4dmasnoticiastv/playlist.m3u8'
          }
        ]
      },{
        name: '4U TV',
        logo: 'https://i.imgur.com/PexhKwp.png',
        epg_id: '4UTV.tr',
        country: 'tr',
        options: [
          {
            format: 'm3u8',
            url: 'https://hls.4utv.live/hls/stream.m3u8'
          }
        ]
      },{
        name: '8TV',
        logo: 'https://i.imgur.com/Jkx9W88.png',
        epg_id: '8TV.my',
        country: 'my',
        options: [
          {
            format: 'm3u8',
            url: 'https://live-streams-ssai-01.tonton.com.my/live/a884c33b-6b11-4433-8bf9-a8899939e224/live.isml/.m3u8'
          }
        ]
      },{
        name: '9XM',
        logo: 'https://i.imgur.com/F17QtN2.png',
        epg_id: '9XM.in',
        country: 'in',
        options: [
          {
            format: 'm3u8',
            url: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8'
          }
        ]
      }/*,{
        name: '',
        logo: '',
        epg_id: '',
        country: '',
        options: [
          {
            format: 'm3u8',
            url: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8'
          }
        ]
      }*/
];