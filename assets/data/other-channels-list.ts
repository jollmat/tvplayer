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
        name: 'TN Todo Noticias',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TN_todo_noticias_logo.svg/200px-TN_todo_noticias_logo.svg.png',
        epg_id: 'TodoNoticias.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://live-01-01-tn.vodgc.net/TN24/index.m3u8'
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
        name: 'El Nueve',
        logo: 'https://i.imgur.com/EtcVSm4.png',
        epg_id: 'ElNueve.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://octubre-live.cdn.vustreams.com/live/channel09/live.isml/live.m3u8'
          }
        ]
      },{
        name: 'ABC News Australia',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/ABC_News_Channel.svg/640px-ABC_News_Channel.svg.png',
        epg_id: 'ABCNews.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8'
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
        name: 'W24',
        logo: 'https://i.imgur.com/PGb4wYw.png',
        epg_id: 'W24.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://ms01.w24.at/W24/smil:liveevent.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'RTV',
        logo: 'https://i.imgur.com/oD7GQxT.pn',
        epg_id: 'RTV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'http://iptv.rtv-ooe.at/stream.m3u8'
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
        name: 'SBT',
        logo: 'https://logodownload.org/wp-content/uploads/2013/12/sbt-logo.png',
        epg_id: 'SBTNacional.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'http://wz4.dnip.com.br/bemtv/bemtv.sdp/playlist.m3u8'
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
        name: 'Vásárhelyi Televízió',
        logo: 'https://i.imgur.com/WOEqdmx.png',
        epg_id: 'VasarhelyiTelevizio.hu',
        country: 'hu',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream.vasarhelyitelevizio.hu/stream/stream.m3u8'
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
        name: 'Deluxe Music',
        logo: 'https://i.imgur.com/E65GQN9.png',
        epg_id: 'DeluxeMusic.de',
        country: 'de',
        options: [
          {
            format: 'm3u8',
            url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/13456/13456_264_live.m3u8'
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
      }
];