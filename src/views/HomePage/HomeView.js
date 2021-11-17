import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoList from "../../components/VideoList";
import VideoListItem from "../../components/VideoListItem";

function getFeed0() {
  const options = {
    method: "GET",
    url: "https://tiktok33.p.rapidapi.com/trending/feed",
    headers: {
      "x-rapidapi-host": "tiktok33.p.rapidapi.com",
      "x-rapidapi-key": "c098396146mshd44a5f89390d5b5p1a614ajsn8f95aa9997e2",
    },
  };
  return axios.get(options.url, options);
}

function getFeed() {
  return new Promise((resolve, reject) => {
    const timeout = Math.round(Math.random() * 500 + 500);
    const response = {
      data: [
        {
          id: "7006694664724122881",
          secretID: "7006694664724122881",
          text: "Inst: kikakim🤍",
          createTime: 1631373229,
          authorMeta: {
            id: "6785823001336415238",
            secUid:
              "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
            name: "kikakiim",
            nickName: "Kika Kim",
            verified: false,
            signature:
              "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637150400&x-signature=D1QjKGAgWDai63EovNutdvoXB3s%3D",
            following: 89,
            fans: 24100000,
            heart: 628000000,
            video: 827,
            digg: 6732,
          },
          musicMeta: {
            musicId: "6952235736812750850",
            musicName: "Cứ Chill Thôi (DJ TuSo & LEA Remix)",
            musicAuthor: "Chillies & Suni Hạ Linh & Rhymastic",
            musicOriginal: false,
            musicAlbum: "Cứ Chill Thôi (DJ TuSo & LEA Remix)",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/dec7f7cce681453daf20aed3e778ca86",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f5e7758750504d5b830a12ebbb339047~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f5e7758750504d5b830a12ebbb339047~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f5e7758750504d5b830a12ebbb339047~c5_720x720.jpeg",
            duration: 60,
          },
          covers: {
            default:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e31a9812e60940d084d78b6318eb668f_1631373232?x-expires=1637085600&x-signature=FfQJRuWFHSkqyC1fCwjv9TaLNq4%3D",
            origin:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/dcedfb7991ab4281857f3da123b599a9_1631373231?x-expires=1637085600&x-signature=cfiQy7XJbym2kC%2B97P4rM0y3faE%3D",
            dynamic:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/6d5b110eb075424bba9cf241b0c418a6_1631373231?x-expires=1637085600&x-signature=nKxQtEWCGX8aVnwx0%2BzZXVSMWOE%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kikakiim/video/7006694664724122881",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/34163e3da410bd1a7962bc545e60fa2d/6193f7e0/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 960, width: 540, duration: 9 },
          diggCount: 4100000,
          shareCount: 9354,
          playCount: 31600000,
          commentCount: 20100,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [{ id: "459476", name: "Color Selector" }],
        },
        {
          id: "7003351927467543810",
          secretID: "7003351927467543810",
          text: "➡️ Side step right left to my 💓",
          createTime: 1630594938,
          authorMeta: {
            id: "6737188750352401410",
            secUid:
              "MS4wLjABAAAAdQQR2OVvFuAzws-JQyiVyn2ACMMkGvB6jVX86-8cakVMECtOeFgtihWpnGcTDhZ9",
            name: "bts_official_bighit",
            nickName: "BTS",
            verified: true,
            signature:
              "This is Official TikTok for BTS.\n방탄소년단 공식 틱톡입니다.",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/30ac5c3a981036bd063985eb158db5d9.jpeg?x-expires=1637150400&x-signature=L8tTrngzCVjSasUlrpqbv3d1jtA%3D",
            following: 0,
            fans: 43600000,
            heart: 713600000,
            video: 49,
            digg: 275,
          },
          musicMeta: {
            musicId: "7000626184039958529",
            musicName: "Butter (feat. Megan Thee Stallion)",
            musicAuthor: "BTS",
            musicOriginal: false,
            musicAlbum: "Butter (feat. Megan Thee Stallion)",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/758c1c7a7f794084b1ae4827b446f5b5",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a84e3d87f49a46438f04b0f7d370655e~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a84e3d87f49a46438f04b0f7d370655e~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a84e3d87f49a46438f04b0f7d370655e~c5_720x720.jpeg",
            duration: 60,
          },
          covers: {
            default:
              "https://p77-sign-sg-lite.tiktokcdn.com/obj/tos-alisg-p-0037/7942d315b52742909ba408421bcf4796_1630594940?x-expires=1637085600&x-signature=vbBilZ%2BTODpDseos09W6Tm22FXs%3D",
            origin:
              "https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/7a45b25bab9e4c29994eb35a1ba2c462_1630594939?x-expires=1637085600&x-signature=gZ%2FRcUna6y9HxyVFSHP1lW5T%2Fec%3D",
            dynamic:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/24e728b11e7a47ed860d375eee771a4c_1630594940?x-expires=1637085600&x-signature=DUTEJS5Wo40tL708PLwxOOcIsrA%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@bts_official_bighit/video/7003351927467543810",
          videoUrl:
            "https://v19.tiktokcdn.com/25836546d7ca120c2fc3f92f380b1660/6193f7e8/video/tos/alisg/tos-alisg-pve-0037/8864c8399a094c42886669ed4ae759a3/?a=1180&br=2688&bt=1344&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3F1cjc6Zm1oNzMzODgzNEApOzM7Z2Q2N2U2N2lkOzY4NWc2ZXA1cjRnYmxgLS1kLy1zczAzMTA0LS9jNjI0Ly1eX2E6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 17 },
          diggCount: 12200000,
          shareCount: 508500,
          playCount: 62400000,
          commentCount: 369800,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [],
        },
        {
          id: "7007480136228539653",
          secretID: "7007480136228539653",
          text: "Findet ihr das noch lustig? 🖤 Ja oder nein? 💕 #1minutejura #lustig #lernenmittiktok",
          createTime: 1631556112,
          authorMeta: {
            id: "6606347334934052870",
            secUid:
              "MS4wLjABAAAAyc-S9fa4XKrtFUAl5aZ9jTm8rjehsJZGQ7RbI-sfaHDnP7u4G9KkRZFxU2Mpitje",
            name: "herranwalt",
            nickName: "Herr Anwalt",
            verified: true,
            signature:
              "Ich bin Anwalt🧑‍⚖️ \nCEO #1MinuteJura 🖤\nInfo@herr-anwalt.de\nBuch u. Impressum:",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bb0ba53b5413f9f7d7843b65ef5452a4~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=u2%2BwsmVm77wniOfSigLV8rAfvH8%3D",
            following: 686,
            fans: 4500000,
            heart: 200600000,
            video: 975,
            digg: 53600,
          },
          musicMeta: {
            musicId: "6777274113254754306",
            musicName: "Pieces (Solo Piano Version)",
            musicAuthor: "Danilo Stankovic",
            musicOriginal: false,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/36c45fbf26c943c0ab9627251afd960b",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a974873dd94a43a28b2bf91d99aba766~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a974873dd94a43a28b2bf91d99aba766~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a974873dd94a43a28b2bf91d99aba766~c5_720x720.jpeg",
            duration: 85,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d4ad2ede170c436aa6481670cc802435?x-expires=1637085600&x-signature=S3oNgd7Pwov95udVVhoIwLKjErg%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/dcc9a802109e420aac2409c21a3600c4_1631556122?x-expires=1637085600&x-signature=DYCL4tCYpZJF0MAzKSnmKq2s0JE%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/1ba2304d27ea4013b47c72c960ef718f_1631556115?x-expires=1637085600&x-signature=Hbq1vyORmLuvNKmub0eYAjVb71g%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@herranwalt/video/7007480136228539653",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/604a6fd4ebba6219a0123bbd9fac5209/6193f7f6/video/tos/useast2a/tos-useast2a-ve-0068c002/b96834565b094311bcd44de1ba5bff9f/?a=1233&br=3288&bt=1644&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2ZqNjU6ZjRzNzMzNzczM0ApaTw5NGg3aGQ6NztpODlkZ2dobm9ocjQwLnNgLS1kMTZzczUyNi5jYS4yXy4yL15iMzQ6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 31 },
          diggCount: 545800,
          shareCount: 417,
          playCount: 4100000,
          commentCount: 1414,
          downloaded: false,
          mentions: [],
          hashtags: [
            {
              id: "1651295133948997",
              name: "1minutejura",
              title: "",
              cover: "",
            },
            { id: "47490", name: "lustig", title: "", cover: "" },
            {
              id: "1659784658086917",
              name: "lernenmittiktok",
              title:
                "A wie Alpakas, H wie Hydroponik, K wie Kameratrick bis Z wie Zero Waste. Mache mit bei #LernenMitTikTok",
              cover:
                "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/64b910cff5622c4d704429007dd0cb43",
            },
          ],
          effectStickers: [],
        },
        {
          id: "7029355077336911110",
          secretID: "7029355077336911110",
          text: "Ach apple ach #ouhmanalta #55555 #fy #fyp #fürdich #xyzbca #humor  #joke #comedy",
          createTime: 1636649268,
          authorMeta: {
            id: "6780734992856302598",
            secUid:
              "MS4wLjABAAAAMF-L42gtJchluOb9NKGB7CFw1NTL7tJf6hOZBxjtmm5xTLpFXgy76SMx3KzCa9l8",
            name: "kaan.etm",
            nickName: "Kaan",
            verified: false,
            signature:
              "IG: kaan.etm\n✨QDH✨\n📧 kaan@enkime.de 📧\n\n2. Acc: @kaan_etm",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1637150400&x-signature=J65%2FqaLsWw0wM0OAbA5p3KhKz3g%3D",
            following: 274,
            fans: 2100000,
            heart: 72900000,
            video: 341,
            digg: 29900,
          },
          musicMeta: {
            musicId: "7029354906926615302",
            musicName: "Originalton",
            musicAuthor: "Kaan",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7029355046148377350.mp3",
            coverThumb:
              "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1637150400&x-signature=qIxsG1IHKAwsz05WCw3qhr0HjkU%3D",
            coverMedium:
              "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1637150400&x-signature=OzrOJkg98j4ar15m2C4xMca7psQ%3D",
            coverLarge:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1637150400&x-signature=J65%2FqaLsWw0wM0OAbA5p3KhKz3g%3D",
            duration: 81,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b451b3f89bce4956ac6ee5247ca14a0f_1636649278?x-expires=1637085600&x-signature=iXIPGaJ0avAPnfrPrXdlxoLKusE%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b1393de74eed4d458c411da8a1bd997c_1636649274?x-expires=1637085600&x-signature=1w8HIMA0EQUs08hwUqq69mB18XE%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/36bfacaa50084247a9688c96b81e5e14_1636649273?x-expires=1637085600&x-signature=UeIRJiwa30G8bYpAA%2FC2y2fqbes%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kaan.etm/video/7029355077336911110",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/684c7017af3c7d9f05836d49e18797f9/6193f828/video/tos/useast2a/tos-useast2a-pve-0068/7d1759d43587451db95e1f07412058f8/?a=1233&br=1896&bt=948&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzxmNWk6Zm5uOTMzNzczM0ApPGZnNGdnM2U8Nzo7Zzo4NGdnYy5ucjRnZTNgLS1kMTZzczYwYC1eMzFeYzZgXjUyMTY6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 81 },
          diggCount: 347200,
          shareCount: 3941,
          playCount: 1400000,
          commentCount: 5213,
          downloaded: false,
          mentions: [],
          hashtags: [
            {
              id: "1666867608081413",
              name: "ouhmanalta",
              title: "",
              cover: "",
            },
            { id: "21461361", name: "55555", title: "", cover: "" },
            {
              id: "153828",
              name: "fy",
              title: "",
              cover: "",
            },
            { id: "229207", name: "fyp", title: "", cover: "" },
            {
              id: "5457735",
              name: "fürdich",
              title:
                "Ein Song der nie vergeht!\n\nMacht mit beim neuen Remix von @diemai 😍  \nEinfach ein Duett machen zur aktuellen Single &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;Für Dich&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; und ein live.ly Meet&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;Greet mit Vanessa Mai gewinnen 🔥",
              cover: "",
            },
            { id: "1652484531221509", name: "xyzbca", title: "", cover: "" },
            {
              id: "19336",
              name: "humor",
              title:
                "¡Es hora de reírte como nunca! Los videos más divertidos están aquí en TikTok. 😂😂😂",
              cover: "",
            },
            { id: "13751", name: "joke", title: "", cover: "" },
            {
              id: "7888",
              name: "comedy",
              title:
                "We're excited to introduce #Comedy in the new Categories section! We wanna see your best original comedy skills! 😂 😂 😂",
              cover: "",
            },
          ],
          effectStickers: [],
        },
        {
          id: "7030858742921055493",
          secretID: "7030858742921055493",
          text: "Wie das am Anfang wackelt 😬😂😂",
          createTime: 1636999368,
          authorMeta: {
            id: "213500426917347328",
            secUid:
              "MS4wLjABAAAAvH7TYVq_mQiz3VFyjTpgbObZBBlSdap_NkgZK0HKnEoR18cZXqs4Eue70Vg6qUwp",
            name: "julesboringlife",
            nickName: "Jule",
            verified: true,
            signature:
              "When the sun shines, we‘ll shine together...\nHuhuu♥️\nImpressum:",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1631729678147590~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=KnqYlt2lxL8A5ll7w0L%2Fs2cuPT8%3D",
            following: 442,
            fans: 5600000,
            heart: 965000000,
            video: 4297,
            digg: 12100,
          },
          musicMeta: {
            musicId: "7028611882210708229",
            musicName: "original sound",
            musicAuthor: "unhaving ;",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7028611981753993990.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1d38d4e1b041f8a9322197cba8ebdea4~c5_100x100.jpeg?x-expires=1637150400&x-signature=X4noSBLX25b%2F4wLI4o%2FsACCpi4M%3D",
            coverMedium:
              "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-avt-0068/1d38d4e1b041f8a9322197cba8ebdea4~c5_720x720.jpeg?x-expires=1637150400&x-signature=fJHYgCbprbEdt9uGgynRcW38OHg%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1d38d4e1b041f8a9322197cba8ebdea4~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=0IbJfaAizbDCc2BLBXGUGxXVNzs%3D",
            duration: 8,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c4c09061cd6e450f96c6785032cb7d36?x-expires=1637085600&x-signature=09IPZNZFBsBCU%2BST%2FjbtAiT9hiQ%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/0338d6ef3c0743fda32fc5b4c6351ecf_1636999369?x-expires=1637085600&x-signature=Tn%2Fs9GlXWkOxv7FBYpSxgl4YcHQ%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/cd1169ed0f5a4f859734ba303dac9b50_1636999369?x-expires=1637085600&x-signature=2y%2FS2JKk6j0oImrS7jJ5967lu%2F0%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@julesboringlife/video/7030858742921055493",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/e05d1728d9ac9c95acc185b92150bdf0/6193f7df/video/tos/useast2a/tos-useast2a-pve-0068/56076f73c4cd488ba00d35478d279040/?a=1233&br=1994&bt=997&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajlobTg6ZmpkOTMzNzczM0ApNWU1NmhpOGRpN2Q3MzRnZ2dyMzJocjRvLjZgLS1kMTZzcy1gYWNfNTMtYjFhYzE1NTE6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 8 },
          diggCount: 234800,
          shareCount: 131,
          playCount: 1600000,
          commentCount: 572,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [],
        },
        {
          id: "7026872984421862702",
          secretID: "7026872984421862702",
          text: "i’ll do this better later but i love this dance dc @Arii🦋🧿",
          createTime: 1636071361,
          authorMeta: {
            id: "5831967",
            secUid: "MS4wLjABAAAA-VASjiXTh7wDDyXvjk10VFhMWUAoxr8bgfO1kAL1-9s",
            name: "charlidamelio",
            nickName: "charli d’amelio",
            verified: true,
            signature: "",
            avatar:
              "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/3c5aab8e2cd418ba04517539d2836dcc~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=S96z2ZsbhxXm2dLkWI8E3OlIZ0I%3D",
            following: 1251,
            fans: 129200000,
            heart: 1600000000,
            video: 1970,
            digg: 8440,
          },
          musicMeta: {
            musicId: "7018071738223332101",
            musicName: "twenty x homecoming",
            musicAuthor: "ashley",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7018071732623772422.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/58dbefdb58d9bc36db797126138112b4~c5_100x100.jpeg?x-expires=1637150400&x-signature=BjBaz2DMfRSGKDbYs6AsdHAltYE%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/58dbefdb58d9bc36db797126138112b4~c5_720x720.jpeg?x-expires=1637150400&x-signature=9WZG7bvYvJ7f4b9fzlGGUUYlIIg%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/58dbefdb58d9bc36db797126138112b4~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=fmLC52pLACNAXQjXKeuAXpmwE98%3D",
            duration: 11,
          },
          covers: {
            default:
              "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/fd886c5c2cda4a339349c530b67e57ca?x-expires=1637085600&x-signature=Xkl1MR9TQuOSZNWAszommpW3YoM%3D",
            origin:
              "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/d6b3f2504eee4ea68788c6dcb2ed32d0_1636071362?x-expires=1637085600&x-signature=l75Hn2BTCa8a0yFPxKLONPale%2Fg%3D",
            dynamic:
              "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/1c14cc1907ef4f7eadb32060e0581110_1636071362?x-expires=1637085600&x-signature=d7m31n%2Fc3mqZFNnytYmM2qkXdnk%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@charlidamelio/video/7026872984421862702",
          videoUrl:
            "https://v19.tiktokcdn.com/31902179ad9bd961ea3b06017f767d4a/6193f7e2/video/tos/useast5/tos-useast5-pve-0068-tx/4d09803dbd304cd38c2f3a4309149763/?a=1233&br=2952&bt=1476&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am00cjw6ZnY6OTMzZzczNEApaWY2NjRnaTs6NzdlaWg8OWcway00cjRvNi9gLS1kMS9zc2BiXzFiMTRjNmNjLTEzL146Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 11 },
          diggCount: 4700000,
          shareCount: 206200,
          playCount: 33500000,
          commentCount: 99900,
          downloaded: false,
          mentions: ["@Arii"],
          hashtags: [],
          effectStickers: [],
        },
        {
          id: "7030399037392129286",
          secretID: "7030399037392129286",
          text: "Wollte auch Mitmachen..✨ (Insta: emirbyr)",
          createTime: 1636892335,
          authorMeta: {
            id: "6699921606704448517",
            secUid:
              "MS4wLjABAAAAmSwqdn7L-roKUufl4bvTt4JVhOKGSbCShrF5rcmn4ePWno2KAM5hCEXFd5abXIkD",
            name: "emiirbayrak",
            nickName: "⚡️EMIR BAYRAK⚡️",
            verified: true,
            signature: "Insta: emirbyr \n📤emir@moonvibe.com",
            avatar:
              "https://p77-sign-va-lite.tiktokcdn.com/musically-maliva-obj/1644765630558213~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=uDW2qleaqgevlhjn%2B%2FRCD0JdTgk%3D",
            following: 894,
            fans: 4500000,
            heart: 496100000,
            video: 2032,
            digg: 9952,
          },
          musicMeta: {
            musicId: "7024193371228965637",
            musicName: "closed doors Ismail RELEASE SOON",
            musicAuthor: "Ismail",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7024193418138045189.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e523a974ddc5c86224aa348a31172eac~c5_100x100.jpeg?x-expires=1637150400&x-signature=c3ZH2zwNjY4V5IxhTjhkqfpNYg0%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e523a974ddc5c86224aa348a31172eac~c5_720x720.jpeg?x-expires=1637150400&x-signature=28O0Z2GQarAOJ9xmpKfKoY70pXw%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e523a974ddc5c86224aa348a31172eac~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=JukdfpwdHuDA6maQjx6VYCzwTHQ%3D",
            duration: 20,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c1c67664ca2146e2aae8633630985b00?x-expires=1637085600&x-signature=9rVP8RWnPzw7OL5DWRiCSCnp3dQ%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/cea743451ab14fee826e3c779a4bbf7b_1636892336?x-expires=1637085600&x-signature=33DbQYUCeNNYI3GYjCP%2F96wtnTY%3D",
            dynamic:
              "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/8234b86aedb04e2b864cafef77f8bfbc_1636892337?x-expires=1637085600&x-signature=u4ygDOuRMLgZZ5YTgDZzKw5kKzQ%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@emiirbayrak/video/7030399037392129286",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/388afac82fbf71625176fe6cb884fac1/6193f7df/video/tos/useast2a/tos-useast2a-pve-0068/71e86303a0d84b609ef2f51b316f63cc/?a=1233&br=1550&bt=775&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M255cTo6ZmlpOTMzNzczM0ApaDY5Nzo0NTs1Nzg0MzUzNmdrNWg1cjRfbDVgLS1kMTZzcy8zYGM1LWE2XmEvMGNeYjQ6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 8 },
          diggCount: 65400,
          shareCount: 91,
          playCount: 306900,
          commentCount: 570,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [{ id: "459294", name: "Greenscreen-Video" }],
        },
        {
          id: "7007564729979800833",
          secretID: "7007564729979800833",
          text: "#ColdplayXBTS #MyUniverse 🪐 Coming Soon..!",
          createTime: 1631575809,
          authorMeta: {
            id: "6737188750352401410",
            secUid:
              "MS4wLjABAAAAdQQR2OVvFuAzws-JQyiVyn2ACMMkGvB6jVX86-8cakVMECtOeFgtihWpnGcTDhZ9",
            name: "bts_official_bighit",
            nickName: "BTS",
            verified: true,
            signature:
              "This is Official TikTok for BTS.\n방탄소년단 공식 틱톡입니다.",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/30ac5c3a981036bd063985eb158db5d9.jpeg?x-expires=1637150400&x-signature=L8tTrngzCVjSasUlrpqbv3d1jtA%3D",
            following: 0,
            fans: 43600000,
            heart: 713600000,
            video: 49,
            digg: 275,
          },
          musicMeta: {
            musicId: "7007073788295415809",
            musicName: "My Universe",
            musicAuthor: "Coldplay x BTS",
            musicOriginal: false,
            musicAlbum: "My Universe",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/869ad2f1639242309bfaa9e00f7b79ea",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a9b7af57c43240f5982dfc75a0a35fd2~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a9b7af57c43240f5982dfc75a0a35fd2~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a9b7af57c43240f5982dfc75a0a35fd2~c5_720x720.jpeg",
            duration: 30,
          },
          covers: {
            default:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/18885a32cb3d4b2f9c2a96836f0528c1?x-expires=1637085600&x-signature=JYt1nVbue6sXwvcjJDmEZr15Bqg%3D",
            origin:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/a4cea66e8c7b4fcd82f41193e9ba7a88_1631575811?x-expires=1637085600&x-signature=Q1FLoGSB3PR29zJ8U%2BODzg2xQks%3D",
            dynamic:
              "https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/f247ee8d26e3483fab13f1d4bac200ae_1631575811?x-expires=1637085600&x-signature=XLM1%2BI2%2FEoXgpzwelltfDkZICEM%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@bts_official_bighit/video/7007564729979800833",
          videoUrl:
            "https://v19.tiktokcdn.com/c0f771ca6263b958ce432b68ee4d4c0d/6193f7e6/video/tos/alisg/tos-alisg-pve-0037/d2fa8922ef44489290dd16ce12cbc61c/?a=1180&br=3080&bt=1540&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2xldjs6Znd3NzMzODgzNEApZDg0OjU6NWVmN2k6O2RnOGdeYF42cjQwcXNgLS1kLy1zc180YGFhYTMwYC5eLS82MGM6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 15 },
          diggCount: 6500000,
          shareCount: 295200,
          playCount: 27700000,
          commentCount: 224800,
          downloaded: false,
          mentions: [],
          hashtags: [
            {
              id: "1692726906436609",
              name: "coldplayxbts",
              title: "",
              cover: "",
            },
            {
              id: "26039",
              name: "myuniverse",
              title:
                "BTS and Coldplay are teaming up for the new song &quot;My Universe&quot; 🎵 Show us your &quot;universe&quot; with hashtag #MyUniverse !",
              cover: "",
            },
          ],
          effectStickers: [],
        },
        {
          id: "7021497851322649862",
          secretID: "7021497851322649862",
          text: "Please make edit🥺🙏🏻 Inst: kikakim🤍",
          createTime: 1634819865,
          authorMeta: {
            id: "6785823001336415238",
            secUid:
              "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
            name: "kikakiim",
            nickName: "Kika Kim",
            verified: false,
            signature:
              "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637150400&x-signature=D1QjKGAgWDai63EovNutdvoXB3s%3D",
            following: 89,
            fans: 24100000,
            heart: 628000000,
            video: 827,
            digg: 6732,
          },
          musicMeta: {
            musicId: "6991751413424491265",
            musicName: "оригинальный звук",
            musicAuthor: "🖤🗑",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/6991751385700272898.mp3",
            coverThumb:
              "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/23750ace5956ac4a872bf6649c19f8dc.jpeg?x-expires=1637150400&x-signature=lQqc%2B1LvNLPIyA8aHlgrYW7uaJY%3D",
            coverMedium:
              "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/23750ace5956ac4a872bf6649c19f8dc.jpeg?x-expires=1637150400&x-signature=TzVi7g5hwG7pMLA1ph3FIRrAOJE%3D",
            coverLarge:
              "https://p58-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/23750ace5956ac4a872bf6649c19f8dc.jpeg?x-expires=1637150400&x-signature=wsTodEozMQysdNmCgGz1rUpzvCQ%3D",
            duration: 7,
          },
          covers: {
            default:
              "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/56846073ab1e4285a468b88929315ea3?x-expires=1637085600&x-signature=N0L%2FLupFBB6jyrFaR4P%2Bl2I5T%2FM%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/978107d35561420484e7fa34ade6012d_1634819866?x-expires=1637085600&x-signature=coBLFaPBD1%2B1kadtxrt9IBY6BEQ%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4bab1ef85a0e4e5dae1a3a5288ba4807_1634819867?x-expires=1637085600&x-signature=KE%2Fqf%2Bo4j%2B6sFq19Hu9Rv9rlbd8%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kikakiim/video/7021497851322649862",
          videoUrl:
            "https://v19.tiktokcdn.com/8b3edc94994b30745e100119e8f65725/6193f7de/video/tos/useast2a/tos-useast2a-pve-0068/644e0a5848f547c09135799d4aa6bff0/?a=1233&br=3454&bt=1727&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3R1aWk6ZjZvODMzNzczM0ApOzhlNDhnZDs3N2dpZGc6O2c2aGpmcjRfcmxgLS1kMTZzczEvMmAwLmBjXy0vYTIxMGA6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 960, width: 540, duration: 7 },
          diggCount: 3300000,
          shareCount: 35200,
          playCount: 25800000,
          commentCount: 33600,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [{ id: "459476", name: "Color Selector" }],
        },
        {
          id: "6998773625557880066",
          secretID: "6998773625557880066",
          text: "Let's Dance😆 #PermissiontoDance",
          createTime: 1629528969,
          authorMeta: {
            id: "6737188750352401410",
            secUid:
              "MS4wLjABAAAAdQQR2OVvFuAzws-JQyiVyn2ACMMkGvB6jVX86-8cakVMECtOeFgtihWpnGcTDhZ9",
            name: "bts_official_bighit",
            nickName: "BTS",
            verified: true,
            signature:
              "This is Official TikTok for BTS.\n방탄소년단 공식 틱톡입니다.",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/30ac5c3a981036bd063985eb158db5d9.jpeg?x-expires=1637150400&x-signature=L8tTrngzCVjSasUlrpqbv3d1jtA%3D",
            following: 0,
            fans: 43600000,
            heart: 713600000,
            video: 49,
            digg: 275,
          },
          musicMeta: {
            musicId: "6982484245067368449",
            musicName: "Permission to Dance",
            musicAuthor: "BTS",
            musicOriginal: false,
            musicAlbum: "Butter / Permission to Dance",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/535440347f7f4a9ca1d616d5fe99343b",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/b7a511c9c7f146279a95f0a0e448e36b~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/b7a511c9c7f146279a95f0a0e448e36b~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/b7a511c9c7f146279a95f0a0e448e36b~c5_720x720.jpeg",
            duration: 60,
          },
          covers: {
            default:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/bd82b27ad3fb4226babb16f16598c204?x-expires=1637085600&x-signature=Vc%2BDyO2bbHxKObWi5RsTBROHt6I%3D",
            origin:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/7865fd30b4724355a1e97152d39d8a05_1629528971?x-expires=1637085600&x-signature=WtVbNtbY4msXMSahUKdpumoUdag%3D",
            dynamic:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1013de728120419db7dc78a3ced3a5dd_1629529194?x-expires=1637085600&x-signature=Fqu5Tv%2FKnS4dMZRPXgmYtRzxG08%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@bts_official_bighit/video/6998773625557880066",
          videoUrl:
            "https://v19.tiktokcdn.com/a88663b7b05819489b841d061524c3e4/6193f7eb/video/tos/alisg/tos-alisg-pve-0037/796f5640f5a8499b973133a7b2d0b717/?a=1180&br=4624&bt=2312&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajY4amg6ZnhkNzMzODgzNEApZjg5ZzlpN2U1N2VoZTQ6NmczNmFlcjRnM2RgLS1kLy1zczVhYTJfYWAxNS5gYF8vLWA6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 20 },
          diggCount: 7700000,
          shareCount: 188600,
          playCount: 33200000,
          commentCount: 283800,
          downloaded: false,
          mentions: [],
          hashtags: [
            {
              id: "1662528942977029",
              name: "permissiontodance",
              title: "",
              cover:
                "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/5321bf1303ab57e6c24302656cc531fc",
            },
          ],
          effectStickers: [],
        },
        {
          id: "7014877097244019970",
          secretID: "7014877097244019970",
          text: "Inst: kikakim🤍",
          createTime: 1633278351,
          authorMeta: {
            id: "6785823001336415238",
            secUid:
              "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
            name: "kikakiim",
            nickName: "Kika Kim",
            verified: false,
            signature:
              "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637150400&x-signature=D1QjKGAgWDai63EovNutdvoXB3s%3D",
            following: 89,
            fans: 24100000,
            heart: 628000000,
            video: 827,
            digg: 6732,
          },
          musicMeta: {
            musicId: "7006226958229015302",
            musicName: "Dc mazur4ik_",
            musicAuthor: "Тот самый Вовка🥕",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7006227332415474438.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/09efb28e3c28f7b93338a5a61fc9cdb7~c5_100x100.jpeg?x-expires=1637150400&x-signature=t7zjNk2UvS%2BGnnuREicfI%2Fz8%2FnQ%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/09efb28e3c28f7b93338a5a61fc9cdb7~c5_720x720.jpeg?x-expires=1637150400&x-signature=cKp9%2BKwD0fmR8dP9gk2teQc48bI%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/09efb28e3c28f7b93338a5a61fc9cdb7~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=dELkKx7P3vrgLcxGEYCYf6p5PGw%3D",
            duration: 14,
          },
          covers: {
            default:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/c53914d7b31349308bc3b2c5d6c92b90_1633278353?x-expires=1637085600&x-signature=gZ1Ket6LLQssMNOWL3hAuQVjx%2Bw%3D",
            origin:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/84c92f0ed6db4ea0b6a600ceec308409_1633278352?x-expires=1637085600&x-signature=9mIW%2FmGXlGNKcNNhAxdbUmOw%2B%2Bw%3D",
            dynamic:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/565bd43b1582420db02922719c2583d9_1633278353?x-expires=1637085600&x-signature=zMCMT5VKTPsvqWvEXRXIuj7Onrw%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kikakiim/video/7014877097244019970",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/60aea8b7d49bc0ec23321502fb0b9993/6193f7e5/video/tos/alisg/tos-alisg-pve-0037c001/513824f743834e84a2cc0d1e502524ac/?a=1233&br=3572&bt=1786&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzNyZzM6ZjN3ODMzODczNEApZWdpaWY8Njw2N2hnZzloN2c2YWpycjRnZ2BgLS1kMS1zczNfMi4tNmFjMV82Ml42MC06Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 960, width: 540, duration: 14 },
          diggCount: 1200000,
          shareCount: 6563,
          playCount: 9700000,
          commentCount: 8087,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [{ id: "459476", name: "Color Selector" }],
        },
        {
          id: "7030859849239923973",
          secretID: "7030859849239923973",
          text: "Wenn man in der Schule einen Film guckt 😂😂😂 #foryou #fürdich #comedy #schule @marvholm",
          createTime: 1636999625,
          authorMeta: {
            id: "6809743127755588614",
            secUid:
              "MS4wLjABAAAALJmfqVtbSJp327xqHyBkyq6bbmyEeM_X6GlmU2AsndxZiAiF_u7YarhBvnDeCYiw",
            name: "fionntime",
            nickName: "FionnTime",
            verified: false,
            signature:
              "➡️ Folg mir auch auf Instagram \nFionntime 👈🏻\n📩 ft@all-about-artists.de",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/30316d32c240ab7bb44b4e2fe5027801~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=jV86hBYIiyLvHUhZeyrTpBtvoUw%3D",
            following: 100,
            fans: 2000000,
            heart: 109300000,
            video: 345,
            digg: 3965,
          },
          musicMeta: {
            musicId: "7030858912224021253",
            musicName: "Originalton",
            musicAuthor: "Finn.time Video Töne",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7030858986266774277.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/bbc87149c70b46b9cdb18eb3bee5fc46~c5_100x100.jpeg?x-expires=1637150400&x-signature=3uT6F1jKZ2uQeohYNCMXDHL7vXY%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/bbc87149c70b46b9cdb18eb3bee5fc46~c5_720x720.jpeg?x-expires=1637150400&x-signature=OIXHMyIpjz315IBR4posaov8Ezw%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/bbc87149c70b46b9cdb18eb3bee5fc46~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=6XN5%2F%2BXXRrQYwQK14N72sLGgyBo%3D",
            duration: 14,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/16db1867f5c74abc94bb7d29069be01c_1636999626?x-expires=1637085600&x-signature=Hhv6llw6trTUImYL7KSlXKgC%2FHA%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/96752746df1a4f559f1ca3cca3c703bc_1636999626?x-expires=1637085600&x-signature=2iUOHgZFh4qF5DBD6a3JbUxwLeo%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7c42e3a5670e4c3ea4e7da38a3e9a991_1636999627?x-expires=1637085600&x-signature=ucu1xXwUaNwynAX6Omdfd4Gd%2Bi0%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@fionntime/video/7030859849239923973",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/0615a57c3325d7b50a457bd8c2aaaf0f/6193f7e5/video/tos/useast2a/tos-useast2a-ve-0068c004/14f078ab1bf8495fa7e7dfa75edde36a/?a=1233&br=1556&bt=778&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzdzdmk6ZmVkOTMzNzczM0ApaTxmZzY0NjwzNzc5OGdpNmczXl80cjRvLzZgLS1kMTZzczZhMF4tNTY0MmMtNmIwMy06Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 14 },
          diggCount: 199700,
          shareCount: 2445,
          playCount: 1000000,
          commentCount: 961,
          downloaded: false,
          mentions: ["@marvholm"],
          hashtags: [
            { id: "42164", name: "foryou", title: "", cover: "" },
            {
              id: "5457735",
              name: "fürdich",
              title:
                "Ein Song der nie vergeht!\n\nMacht mit beim neuen Remix von @diemai 😍  \nEinfach ein Duett machen zur aktuellen Single &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;Für Dich&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; und ein live.ly Meet&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;Greet mit Vanessa Mai gewinnen 🔥",
              cover: "",
            },
            {
              id: "7888",
              name: "comedy",
              title:
                "We're excited to introduce #Comedy in the new Categories section! We wanna see your best original comedy skills! 😂 😂 😂",
              cover: "",
            },
            { id: "1268887", name: "schule", title: "", cover: "" },
          ],
          effectStickers: [],
        },
        {
          id: "7019337042270113029",
          secretID: "7019337042270113029",
          text: "#slavikjunge #slavik #ma4",
          createTime: 1634316762,
          authorMeta: {
            id: "6744669099500880901",
            secUid:
              "MS4wLjABAAAAUNDjINXduDm7d5rggTS0qXzVn-3vUrvCY7WauECfFD4FjLMwBmoi1xRQN7Z5qKuK",
            name: "slavikjunge.ma4",
            nickName: "Slavik",
            verified: true,
            signature: "‚Durch die Nacht‘ 19.11",
            avatar:
              "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1f5e3fdf88295b7717b897fe12838707~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=%2Bc05dJvr3EPWH52ajygowMz9d%2Fk%3D",
            following: 1,
            fans: 2900000,
            heart: 59700000,
            video: 825,
            digg: 4615,
          },
          musicMeta: {
            musicId: "7019336934149507845",
            musicName: "Originalton",
            musicAuthor: "Slavik",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7019336968500824837.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1f5e3fdf88295b7717b897fe12838707~c5_100x100.jpeg?x-expires=1637150400&x-signature=p1%2BWCJN5yAzvkYW9IUliqt8oOfg%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1f5e3fdf88295b7717b897fe12838707~c5_720x720.jpeg?x-expires=1637150400&x-signature=q0q2u6%2FHEphjDaJXDV%2FV1K78snM%3D",
            coverLarge:
              "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1f5e3fdf88295b7717b897fe12838707~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=%2Bc05dJvr3EPWH52ajygowMz9d%2Fk%3D",
            duration: 9,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ea21375e073c4635b8db0519afb8c3b9?x-expires=1637085600&x-signature=fzKB09oomir5TIRFpOwE2b0bd9c%3D",
            origin:
              "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/e7f6cb30b93e456ba9e9259c430e3347_1634316766?x-expires=1637085600&x-signature=i9iKV92SbILsmFawQhl6aH48nhE%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/69b5c94839c84160921f5b9f023db1a9_1634316766?x-expires=1637085600&x-signature=pPUgtHlaKS1erVT%2FnMEqkO%2F0hGk%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@slavikjunge.ma4/video/7019337042270113029",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/6c73ad6bc1e0f19db0fa1c256952b5dd/6193f7e0/video/tos/useast2a/tos-useast2a-ve-0068c001/82b23a42f0b1415ba212c6bc37ef379f/?a=1233&br=5940&bt=2970&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzV0bGk6Zjt1ODMzNzczM0ApM2k3NDk3M2QzN2VkZmc4NWdlay9ycjRnMGhgLS1kMTZzczReX2IvNjNgNWM1MS9iNV46Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 9 },
          diggCount: 614400,
          shareCount: 31700,
          playCount: 7700000,
          commentCount: 2966,
          downloaded: false,
          mentions: [],
          hashtags: [
            {
              id: "1630809109107717",
              name: "slavikjunge",
              title: "",
              cover: "",
            },
            { id: "40047511", name: "slavik", title: "", cover: "" },
            {
              id: "30671793",
              name: "ma4",
              title: "",
              cover: "",
            },
          ],
          effectStickers: [],
        },
        {
          id: "6999305952642043138",
          secretID: "6999305952642043138",
          text: "",
          createTime: 1629652911,
          authorMeta: {
            id: "6785823001336415238",
            secUid:
              "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
            name: "kikakiim",
            nickName: "Kika Kim",
            verified: false,
            signature:
              "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637150400&x-signature=D1QjKGAgWDai63EovNutdvoXB3s%3D",
            following: 89,
            fans: 24100000,
            heart: 628000000,
            video: 827,
            digg: 6732,
          },
          musicMeta: {
            musicId: "6719489726790896390",
            musicName: "River",
            musicAuthor: "Bishop Briggs",
            musicOriginal: false,
            musicAlbum: "Church Of Scars",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/7f15591a06114c758e7889e4209e8d80",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/66a3f286cc884604b6940908b2af802c~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/66a3f286cc884604b6940908b2af802c~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/66a3f286cc884604b6940908b2af802c~c5_720x720.jpeg",
            duration: 9,
          },
          covers: {
            default:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/87c295e5a43a4f64b8a35c4a6ec374a3_1629652914?x-expires=1637085600&x-signature=mffBTLBsbYRe2wYQSjVdAyXt02k%3D",
            origin:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/ded852d6a73d4430b2efce0069499e22_1629652914?x-expires=1637085600&x-signature=4Uneh3Kd5HR3%2F3yFkGFd34pIUXg%3D",
            dynamic:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/06a80128ff4045368b10df887d31b4e5_1629652914?x-expires=1637085600&x-signature=MJHKt7Pp6wa%2F7k%2FAWcBmAipWFcQ%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kikakiim/video/6999305952642043138",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/8c23c4605042190911dd1438efea17f4/6193f7df/video/tos/alisg/tos-alisg-pve-0037c001/c5daf21bbf7d4f3dab4e387255955f83/?a=1233&br=3092&bt=1546&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anI5Mzc6Zjg7NzMzODczNEApODNmPGk4N2Q5NztpNmlnNWcuY2Y1cjRfY2VgLS1kMS1zczVfYy8tYTZeYzVhY2NeXy86Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 960, width: 540, duration: 8 },
          diggCount: 2300000,
          shareCount: 8239,
          playCount: 17700000,
          commentCount: 9872,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [{ id: "459476", name: "Color Selector" }],
        },
        {
          id: "7030846643398266118",
          secretID: "7030846643398266118",
          text: "Sie täuschte sich…. 💔 #foryou folgt mir gern auf Insta: Benjamin.krsn",
          createTime: 1636996550,
          authorMeta: {
            id: "6707471323985183749",
            secUid:
              "MS4wLjABAAAAdxWs4TKVuRJqcVCC3ac_oPb2Gz7sox3GbFKoheuXmRtg0MAfg2-DC2UmSRi4NMZi",
            name: "benjaminkra",
            nickName: "It’s me Benjamin",
            verified: false,
            signature:
              "Follow me on Instagram: Benjamin.krsn🤍\n📥Benjamin@moonartist.de",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2687712f5b2ade007ac00b89d4055568~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=q2O1qE3YbqGVDt9kgaQ98TdEjhw%3D",
            following: 167,
            fans: 565300,
            heart: 42000000,
            video: 934,
            digg: 58100,
          },
          musicMeta: {
            musicId: "6917324503026501634",
            musicName: "On The Floor",
            musicAuthor: "Jennifer Lopez",
            musicOriginal: false,
            musicAlbum: "LOVE? - Deluxe Edition",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/91364b8bb22f4bc69e0a4ec0f4d19df3",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/34cc2addf97e4fe4a2ebedf2576ed099~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/34cc2addf97e4fe4a2ebedf2576ed099~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/34cc2addf97e4fe4a2ebedf2576ed099~c5_720x720.jpeg",
            duration: 45,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d993f3206462487f9430330633d90ea5?x-expires=1637085600&x-signature=Mqgy6c4LldMexefFjo6Yjg4DkIc%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/152f256732154bc18b5578ed2174cedb_1636996552?x-expires=1637085600&x-signature=yabkyfmEJKHqlX8VIt8IUrd3cOs%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6b25041b45834b67b96a4c47e6556dc5_1636996552?x-expires=1637085600&x-signature=pmBVlR0%2FsEk2LQPPu%2BjyRH%2BKoQg%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@benjaminkra/video/7030846643398266118",
          videoUrl:
            "https://v19.tiktokcdn.com/906720de30f6b2b76b1100cfd7cc1ebe/6193f7e5/video/tos/useast2a/tos-useast2a-ve-0068c003/c3a7bd632cc74ac3b2217605b1a64e2f/?a=1233&br=1520&bt=760&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k3dDs6Zmc8OTMzNzczM0ApNTgzNGlmOmRkN2Q8NzlmNGdrXmtucjRvXzZgLS1kMTZzcy9hLWAyXzExMDJjXzY0M146Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 14 },
          diggCount: 11500,
          shareCount: 25,
          playCount: 65200,
          commentCount: 110,
          downloaded: false,
          mentions: [],
          hashtags: [{ id: "42164", name: "foryou", title: "", cover: "" }],
          effectStickers: [],
        },
        {
          id: "7004914001779952902",
          secretID: "7004914001779952902",
          text: "#anzeige Tiktok do your thing.🖤  #ad #foryou  Who remembers ?",
          createTime: 1630958637,
          authorMeta: {
            id: "6877973313554269190",
            secUid:
              "MS4wLjABAAAAan2sa3hoA9L2gGhwU0Xz_hjWJWvVlDo_PWsIHVClWqkwUKVjgO1bM1cO11pVhp93",
            name: "pradschapate",
            nickName: "eyo wassup",
            verified: false,
            signature: "hi\nlibra rising",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e1519dca19dd56d877c34a293b9acebb~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=JcpD6AXeOmurlJ7CqtjCztfr8zg%3D",
            following: 209,
            fans: 1600000,
            heart: 38600000,
            video: 68,
            digg: 12100,
          },
          musicMeta: {
            musicId: "6956236290698349317",
            musicName: "Originalton",
            musicAuthor: "vzqrblx",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6956236372961266437.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1697124529271814~c5_100x100.jpeg?x-expires=1637150400&x-signature=7DLfCON9qm4AtZSTpBh77PXPKgw%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1697124529271814~c5_720x720.jpeg?x-expires=1637150400&x-signature=OfQ58rcFHHLdGNtOEQda%2B98jrek%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1697124529271814~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=jGGVeHLXWGrBQ1MeY5im3%2B3afFk%3D",
            duration: 11,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ad64232dc5e44f47abd5a40e0ccc9f17_1630958639?x-expires=1637085600&x-signature=ZC%2B17eTUJrXgNSp%2FGoY8VzKcC94%3D",
            origin:
              "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2587b4c4306546d8b15473be896b3adb_1630958638?x-expires=1637085600&x-signature=K8YfmFGC8YiCIj4fjem0tiWjAWU%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bfee2f5006cc4d9aa01c04c2812fe44c_1630958639?x-expires=1637085600&x-signature=cDJPdqiFYhmbN2BLsqCO3AGEZjo%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@pradschapate/video/7004914001779952902",
          videoUrl:
            "https://v19.tiktokcdn.com/faa8991f890043b923077951a2985d19/6193f7e2/video/tos/useast2a/tos-useast2a-ve-0068c003/0c819fd818da4d03a6d6753e66e53b0e/?a=1233&br=5586&bt=2793&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3FxO2g6ZjY6NzMzNzczM0ApZzs0ZTMzNWU7NzhmZjdlO2dsam9lcjRfNW9gLS1kMTZzczE0LWExXzYvXy4uX14yXi46Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 11 },
          diggCount: 17900000,
          shareCount: 130200,
          playCount: 87900000,
          commentCount: 171000,
          downloaded: false,
          mentions: [],
          hashtags: [
            { id: "11890118", name: "anzeige", title: "", cover: "" },
            {
              id: "20898",
              name: "ad",
              title: "",
              cover: "",
            },
            { id: "42164", name: "foryou", title: "", cover: "" },
          ],
          effectStickers: [],
        },
        {
          id: "7011878791655984385",
          secretID: "7011878791655984385",
          text: "Inst: kikakim🤍",
          createTime: 1632580253,
          authorMeta: {
            id: "6785823001336415238",
            secUid:
              "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
            name: "kikakiim",
            nickName: "Kika Kim",
            verified: false,
            signature:
              "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637150400&x-signature=D1QjKGAgWDai63EovNutdvoXB3s%3D",
            following: 89,
            fans: 24100000,
            heart: 628000000,
            video: 827,
            digg: 6732,
          },
          musicMeta: {
            musicId: "7009903590659607322",
            musicName: "Squid Game - Green Light Red Light",
            musicAuthor: "Yovinca Prafika",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7009903532912544538.mp3",
            coverThumb:
              "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1663109139272706.jpeg?x-expires=1637150400&x-signature=HdxT5eBNJLRk12X%2FKBGU9Km%2Fxbo%3D",
            coverMedium:
              "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1663109139272706.jpeg?x-expires=1637150400&x-signature=QlA7n3JC0TgI%2BUM3HnOSs5nPtgs%3D",
            coverLarge:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tiktok-obj/1663109139272706.jpeg?x-expires=1637150400&x-signature=nO7NXuPOTzWVctUYr2K0bXuP%2FL0%3D",
            duration: 8,
          },
          covers: {
            default:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/0c9627223b534c0bb37ea5dc273f0934_1632580255?x-expires=1637085600&x-signature=ycgS2jRnWmB0ddsfh2dwp9UCuT0%3D",
            origin:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/191cb32ef8cd444195b2667bec6392e3_1632580254?x-expires=1637085600&x-signature=nLTwpVT7GheokMZi5%2FGjaQj049g%3D",
            dynamic:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/a100209e62c8440f82c9d67cefc84c34_1632580255?x-expires=1637085600&x-signature=uDH7zWWjRBBdeD6zoPT60ca%2BadU%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kikakiim/video/7011878791655984385",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/acd599aea9e7f5356e2e8159d3812a65/6193f7df/video/tos/alisg/tos-alisg-pve-0037c001/5a4f83f6965248769a42ded577c58fb1/?a=1233&br=3172&bt=1586&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzRtbTM6ZjVtODMzODczNEApNmZoZDg2OWU3NzQ1Nzw0N2dmbDJicjRnMjRgLS1kMS1zcy8tMzVfMl8vYzUwMDVfLl46Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 960, width: 540, duration: 8 },
          diggCount: 1200000,
          shareCount: 1484,
          playCount: 18100000,
          commentCount: 4489,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [],
        },
        {
          id: "7030141310858185990",
          secretID: "7030141310858185990",
          text: "Welcher ist bis jetzt euer favorite #Remix Heute mal mit Kontaktlinsen 👁 🤫(Ig:@memira.x) #fy #fürdich",
          createTime: 1636832327,
          authorMeta: {
            id: "6739579292165342214",
            secUid:
              "MS4wLjABAAAA9BqctbMr8-FDtsr-qOlfljvCMXANoMZBLyrSIX8pw-KJuW58r1TPtFCD3PmtJ7in",
            name: "memira.x",
            nickName: "✨MEMIRA ✨",
            verified: true,
            signature: "✨WILLKOMMEN  ✨\n📨:memira@allimpact.com",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/b25078fc380301f6be6c7b9c183085a2~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=Rb2d8Yp8P3IpGTEB1DO7tEIkkOo%3D",
            following: 556,
            fans: 2700000,
            heart: 167100000,
            video: 785,
            digg: 22600,
          },
          musicMeta: {
            musicId: "7029654784491801350",
            musicName: "Paris Freestyle x Gangstas Paradise",
            musicAuthor: "rene.crt",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7029654950267374341.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7d299e254109e7176116ead671462e01~c5_100x100.jpeg?x-expires=1637150400&x-signature=UdG7X6%2BzszYcdFA9q1YVtM6Opy0%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7d299e254109e7176116ead671462e01~c5_720x720.jpeg?x-expires=1637150400&x-signature=dpZlJcFxrDkyjLwDNrTHD8OdzG4%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7d299e254109e7176116ead671462e01~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=vixjjJFKMuN7g8ICMbnlykTNxyQ%3D",
            duration: 12,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/079b4c92e2084bad8c68f5f7e2edf1b6_1636832329?x-expires=1637085600&x-signature=kwylJnEU4c5hFzFW1RkH0cHedJk%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/88c0a52bc9f4441087f9ba1412e509d5_1636832328?x-expires=1637085600&x-signature=jIISoXwnY7TcRcHoxigkM%2B9aNRo%3D",
            dynamic:
              "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/3f725964af2440668d1031676fb6317b_1636832329?x-expires=1637085600&x-signature=n5lWENsWTQ%2FV9hHDshIR7pxuFoc%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@memira.x/video/7030141310858185990",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/12384dfffe6b117354c91edf0c57764c/6193f7e2/video/tos/useast2a/tos-useast2a-ve-0068c003/83acaa75e1e2425a89310ddb6d3a3762/?a=1233&br=2260&bt=1130&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajNoODc6Zmg0OTMzNzczM0ApaDtmOjc2ZDs7Nzg6M2hnNmcuMmk0cjRvNTVgLS1kMTZzczEvMy80YWEwNmAwLjReYGM6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 11 },
          diggCount: 141800,
          shareCount: 240,
          playCount: 701800,
          commentCount: 542,
          downloaded: false,
          mentions: ["@memira"],
          hashtags: [
            {
              id: "5425",
              name: "remix",
              title:
                "Whether it's your favorite #Remix or a mashup you can't resist, we want to see your best.",
              cover:
                "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/6083d5dc6cb227cd16c885475f5e22d6",
            },
            { id: "153828", name: "fy", title: "", cover: "" },
            {
              id: "5457735",
              name: "fürdich",
              title:
                "Ein Song der nie vergeht!\n\nMacht mit beim neuen Remix von @diemai 😍  \nEinfach ein Duett machen zur aktuellen Single &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;Für Dich&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; und ein live.ly Meet&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;Greet mit Vanessa Mai gewinnen 🔥",
              cover: "",
            },
          ],
          effectStickers: [],
        },
        {
          id: "7030828383080680709",
          secretID: "7030828383080680709",
          text: "QDH - Spielfilm 🎞 #ouhmanalta #qdh #55555 #fy #fyp #fürdich #xyzbca #humor #joke #comedy",
          createTime: 1636992299,
          authorMeta: {
            id: "6780734992856302598",
            secUid:
              "MS4wLjABAAAAMF-L42gtJchluOb9NKGB7CFw1NTL7tJf6hOZBxjtmm5xTLpFXgy76SMx3KzCa9l8",
            name: "kaan.etm",
            nickName: "Kaan",
            verified: false,
            signature:
              "IG: kaan.etm\n✨QDH✨\n📧 kaan@enkime.de 📧\n\n2. Acc: @kaan_etm",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1637150400&x-signature=J65%2FqaLsWw0wM0OAbA5p3KhKz3g%3D",
            following: 274,
            fans: 2100000,
            heart: 72900000,
            video: 341,
            digg: 29900,
          },
          musicMeta: {
            musicId: "7030828283868547846",
            musicName: "Originalton",
            musicAuthor: "Kaan",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7030828367905868550.mp3",
            coverThumb:
              "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1637150400&x-signature=qIxsG1IHKAwsz05WCw3qhr0HjkU%3D",
            coverMedium:
              "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1637150400&x-signature=OzrOJkg98j4ar15m2C4xMca7psQ%3D",
            coverLarge:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1637150400&x-signature=J65%2FqaLsWw0wM0OAbA5p3KhKz3g%3D",
            duration: 83,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7505be1cdd174d18b24fdf5179c8cc1f_1636992331?x-expires=1637085600&x-signature=NBdG78MzTkxndt25D74wUB5wxIw%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/82c744e5a6f84bac92966c1571208a0d_1636992303?x-expires=1637085600&x-signature=qOSBxzq4cucfoksglCdN7fFq1C0%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7fc9a5cee5854077a9cab0675113b93f_1636992304?x-expires=1637085600&x-signature=UdcrqEts%2FmH5yxSVPO9SExAbKfE%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kaan.etm/video/7030828383080680709",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/195509de068b7ff86078ddb7a7310921/6193f82a/video/tos/useast2a/tos-useast2a-ve-0068c003/c444976f4b9f48eab1cc03eee618c648/?a=1233&br=1966&bt=983&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anNzOjs6Zm47OTMzNzczM0ApO2Y4N2RnMzxkN2ZkaWc8ZGdybS5rcjRfNjZgLS1kMTZzczY1NmFgNTVhLzMyXy82NS06Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 83 },
          diggCount: 93500,
          shareCount: 531,
          playCount: 336700,
          commentCount: 1501,
          downloaded: false,
          mentions: [],
          hashtags: [
            {
              id: "1666867608081413",
              name: "ouhmanalta",
              title: "",
              cover: "",
            },
            { id: "73985437", name: "qdh", title: "", cover: "" },
            {
              id: "21461361",
              name: "55555",
              title: "",
              cover: "",
            },
            { id: "153828", name: "fy", title: "", cover: "" },
            {
              id: "229207",
              name: "fyp",
              title: "",
              cover: "",
            },
            {
              id: "5457735",
              name: "fürdich",
              title:
                "Ein Song der nie vergeht!\n\nMacht mit beim neuen Remix von @diemai 😍  \nEinfach ein Duett machen zur aktuellen Single &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;Für Dich&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; und ein live.ly Meet&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;Greet mit Vanessa Mai gewinnen 🔥",
              cover: "",
            },
            { id: "1652484531221509", name: "xyzbca", title: "", cover: "" },
            {
              id: "19336",
              name: "humor",
              title:
                "¡Es hora de reírte como nunca! Los videos más divertidos están aquí en TikTok. 😂😂😂",
              cover: "",
            },
            { id: "13751", name: "joke", title: "", cover: "" },
            {
              id: "7888",
              name: "comedy",
              title:
                "We're excited to introduce #Comedy in the new Categories section! We wanna see your best original comedy skills! 😂 😂 😂",
              cover: "",
            },
          ],
          effectStickers: [],
        },
        {
          id: "7006672901537631490",
          secretID: "7006672901537631490",
          text: "Inst: kikakim🤍",
          createTime: 1631368162,
          authorMeta: {
            id: "6785823001336415238",
            secUid:
              "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
            name: "kikakiim",
            nickName: "Kika Kim",
            verified: false,
            signature:
              "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637150400&x-signature=D1QjKGAgWDai63EovNutdvoXB3s%3D",
            following: 89,
            fans: 24100000,
            heart: 628000000,
            video: 827,
            digg: 6732,
          },
          musicMeta: {
            musicId: "6719933750727150342",
            musicName: "Senza filtro (prod. Macs)",
            musicAuthor: "Loomy",
            musicOriginal: false,
            musicAlbum: "Senza filtro (prod. Macs)",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/6d9def651a0840d0be08189eabf53299",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0ac286cbb29d4452a04ffbc7dd729478~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0ac286cbb29d4452a04ffbc7dd729478~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0ac286cbb29d4452a04ffbc7dd729478~c5_720x720.jpeg",
            duration: 14,
          },
          covers: {
            default:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1d7da261375b4106a71b53c91ca00cdc_1631368175?x-expires=1637085600&x-signature=zQqmpREsYSitip2%2FNNIl4g21cW8%3D",
            origin:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/f397157b6ff9458daa76c5e199512a05_1631368175?x-expires=1637085600&x-signature=SL97LjH8ff7%2Bb4SrK3ArJp3duPw%3D",
            dynamic:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/eab3c33494c245dead9146e2bb3584ab_1631368175?x-expires=1637085600&x-signature=6qpfZUlp4x%2FRa5CfNbZdYvHFpaY%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kikakiim/video/7006672901537631490",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/ebf4cc718cd80c4f0c595767baf8d1b6/6193f7e5/video/tos/alisg/tos-alisg-pve-0037c001/519d18f8fe7f4c018f2d81b2ecf06a56/?a=1233&br=2364&bt=1182&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajprNDs6ZnBlNzMzODczNEApPDY0NmgzZGQzN2kzODk4O2dgZjBjcjQwNHJgLS1kMS1zc2MzYS1iMS4tMmFfNDMuNGA6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 960, width: 540, duration: 14 },
          diggCount: 7300000,
          shareCount: 11400,
          playCount: 59200000,
          commentCount: 21900,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [{ id: "310047", name: "No Filter" }],
        },
        {
          id: "7030493325799050502",
          secretID: "7030493325799050502",
          text: "Was eine wilde Transition😼 insta-videozeugs #butterfelis🦋 #butterfelis",
          createTime: 1636914287,
          authorMeta: {
            id: "78992242505342976",
            secUid:
              "MS4wLjABAAAAOo-uO_dmVonO3e0cVNOtTApc68-uOKh_-Oy-8u5n68v_DmGKOg5UhzdiWF57fy42",
            name: "videozeugs",
            nickName: "F e l i 🦋",
            verified: false,
            signature:
              "my name is Feli 🦋\nIch mach auch coole Sachen auf Insta glaub ich",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/20a85bd1e76cb0b7b859571c499da578.jpeg?x-expires=1637150400&x-signature=%2F09lj0gs%2FWDWdXRw8L%2FVwBRlKcU%3D",
            following: 303,
            fans: 2300000,
            heart: 487900000,
            video: 5026,
            digg: 54800,
          },
          musicMeta: {
            musicId: "7022767910011587333",
            musicName: "Pretty savage instrumental by BLACKPINK",
            musicAuthor: "gis",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7022767934376348422.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a3fa420e006114c49349b5259506616a~c5_100x100.jpeg?x-expires=1637150400&x-signature=KKAPx1VlpVhSvyxgLZXpL7rDSgY%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a3fa420e006114c49349b5259506616a~c5_720x720.jpeg?x-expires=1637150400&x-signature=x4vOb6WJQ1HSuDWlARqBu3tT56M%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a3fa420e006114c49349b5259506616a~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=nA5MbCCcKHQSkqZRyrmLDPSop1k%3D",
            duration: 10,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/97865886769a4927843dce4da2a7b94a?x-expires=1637085600&x-signature=yXjzpsKPHTDs6vqyBFAW12Zm3FI%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/56ba826e0b064c1b8b39b605811abdad_1636914288?x-expires=1637085600&x-signature=LOJBo4SOxMWKbRRkYgC60VoQHf0%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6ad6d1d6557840af86e489bfcfc5e00a_1636914289?x-expires=1637085600&x-signature=EbpkUUGEKsYmG8bKBlTDFa6UVXI%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@videozeugs/video/7030493325799050502",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/89cb3161cf41a18fb22b6bb2b8a09b76/6193f7de/video/tos/useast2a/tos-useast2a-ve-0068c004/c3dd4950b56f47dba52c145c0ba69794/?a=1233&br=2934&bt=1467&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amZ0cGk6ZmlvOTMzNzczM0ApNDszOjxkZ2U7N2Q2NzppaGdraDZxcjQwNTVgLS1kMTZzc15iYWI2NmAwLS9fYDMvLTU6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 7 },
          diggCount: 167100,
          shareCount: 90,
          playCount: 786700,
          commentCount: 382,
          downloaded: false,
          mentions: [],
          hashtags: [
            {
              id: "1688613349106690",
              name: "butterfelis🦋",
              title: "",
              cover: "",
            },
            {
              id: "1688411569032197",
              name: "butterfelis",
              title: "",
              cover: "",
            },
          ],
          effectStickers: [],
        },
        {
          id: "7029761035716349190",
          secretID: "7029761035716349190",
          text: "#girlfriend #california #girls #oh #kingloui23 #gönntmir",
          createTime: 1636743787,
          authorMeta: {
            id: "6534345858895336448",
            secUid:
              "MS4wLjABAAAAHmgs8n8zvP-G9IdI5DuWJmr-QYEF6COpIYjLA-5auuTaJ2k40cAHW8RcSCKUw0ZT",
            name: "kingloui23",
            nickName: "King Louie",
            verified: false,
            signature:
              "💌 management@midaro-marketing.de\n\nSnap 👻 Aman.D Ruffy\n\nInsta 📸-> Kingloui23",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dcfbd1c57962804632b3c71e03ef27bf~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=3lIMpBZ8t%2FcKqrVPD8S6U2pwybE%3D",
            following: 406,
            fans: 3000000,
            heart: 123700000,
            video: 1103,
            digg: 14400,
          },
          musicMeta: {
            musicId: "249654255282843649",
            musicName: "California Gurls",
            musicAuthor: "Katy Perry",
            musicOriginal: false,
            musicAlbum: "Teenage Dream",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/2dc5d8164b364ed59e25837ae19a3b23",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/44b0487b33d54e94a20d22cc3c4faf5b~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/44b0487b33d54e94a20d22cc3c4faf5b~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/44b0487b33d54e94a20d22cc3c4faf5b~c5_720x720.jpeg",
            duration: 30,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/020851c0571d4b088cc4c843cc664f0a?x-expires=1637085600&x-signature=iv5NhyR1prFcLbtcHzap3rHpGTs%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/09cb0cf3f44643c48915c097e50bc725_1636743789?x-expires=1637085600&x-signature=Rr0nFru1cMCX8YOGWXnYE%2BsoEv0%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b68f8ae0d04843d88ec085d839d564a0_1636743790?x-expires=1637085600&x-signature=OxR8ptxCAgfDyQRx%2BdUhOUFNBuA%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kingloui23/video/7029761035716349190",
          videoUrl:
            "https://v19.tiktokcdn.com/a0f5fe2c769ed7fbfca7bea8115ea90e/6193f7e7/video/tos/useast2a/tos-useast2a-pve-0068/c9a84160fc3541d091d263cf6346cbe1/?a=1233&br=3318&bt=1659&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2tueDY6ZnJlOTMzNzczM0ApZmZoNGk7O2RlNzo5OWY6ZmdfMWFkcjRfaDRgLS1kMTZzczVeMmIvMi5jLS5fYi80YGA6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 16 },
          diggCount: 19600,
          shareCount: 57,
          playCount: 101000,
          commentCount: 154,
          downloaded: false,
          mentions: [],
          hashtags: [
            { id: "22597", name: "girlfriend", title: "", cover: "" },
            {
              id: "5479",
              name: "california",
              title: "",
              cover: "",
            },
            { id: "6597", name: "girls", title: "", cover: "" },
            {
              id: "5962",
              name: "oh",
              title: "",
              cover: "",
            },
            {
              id: "1688612649042946",
              name: "kingloui23",
              title: "",
              cover: "",
            },
            { id: "1601366267082757", name: "gönntmir", title: "", cover: "" },
          ],
          effectStickers: [],
        },
        {
          id: "7030838619766033669",
          secretID: "7030838619766033669",
          text: "#mann #angestelte #viral #trend #fy #fypシ #fypシ゚viral #fypage #fypp #fy #hahaha",
          createTime: 1636994682,
          authorMeta: {
            id: "6711243336185578502",
            secUid:
              "MS4wLjABAAAAthiME0677Tp_sK65ewplV-np893_KuZQ92kPEeg9jeULT-zJOLte_D855OZthejZ",
            name: "bondo_official",
            nickName: "Bondo_official",
            verified: false,
            signature:
              "Ich danke jedem einzelnen Follower ❤️🙏\nFolgt mir auf Instagram ❤️🙏",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/33aed2a4addeca178f01fc7e245a500f~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=Nbyq5Ir7xD6Fp%2FTSJtTN0U3eIX8%3D",
            following: 38,
            fans: 2087,
            heart: 140000,
            video: 102,
            digg: 2168,
          },
          musicMeta: {
            musicId: "7011728243254512385",
            musicName: "оригинальный звук",
            musicAuthor: "𝐂𝐡𝐨𝐫𝐬𝐡𝐚𝐧𝐛𝐢𝐞𝐯 𝕌ℝ𝕁",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf77-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7012998622795483905.mp3",
            coverThumb:
              "https://p58-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8a4817299f1f3e72f8eca5b189ff9728.jpeg?x-expires=1637150400&x-signature=1EaPY%2BA67lIN9J2MG1okdQfJhDI%3D",
            coverMedium:
              "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/8a4817299f1f3e72f8eca5b189ff9728.jpeg?x-expires=1637150400&x-signature=GTqSvJFnb%2B2maEyjH%2FbplHuJrzo%3D",
            coverLarge:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/8a4817299f1f3e72f8eca5b189ff9728.jpeg?x-expires=1637150400&x-signature=FQR0Ll8jVmtlYnJtmkXBC9S38js%3D",
            duration: 29,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3030ffed4ae14592ae94eff459ad4b4b?x-expires=1637085600&x-signature=5Ww9urBZ%2F46DquVSkFEXQ5WN%2Bhw%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5e74574afa994ed5a3f9e97f6f7987e5_1636994684?x-expires=1637085600&x-signature=%2B0cuIbpyMQRhmVxUGMNDzYIF3fI%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9df43f60f97b46c59d866e9a8f71b6a3_1636994685?x-expires=1637085600&x-signature=lXTUwUZyfZIxbWLrzixqVbjsFzU%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@bondo_official/video/7030838619766033669",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/b9d375aef18232cfc9a5583f19b27b06/6193f7df/video/tos/useast2a/tos-useast2a-pve-0068/bb9f86c32c884a8b8e2292626a2287dc/?a=1233&br=1662&bt=831&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajhoPGk6ZnQ7OTMzNzczM0ApaGdnaWZlNzwzNztkZDtmPGdpMzFpcjQwbzZgLS1kMTZzczU1MmEtMWAxXmEuLTEzYF46Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 8 },
          diggCount: 1186,
          shareCount: 182,
          playCount: 79300,
          commentCount: 40,
          downloaded: false,
          mentions: [],
          hashtags: [
            { id: "46372", name: "mann", title: "", cover: "" },
            {
              id: "1632074518515717",
              name: "angestelte",
              title: "",
              cover: "",
            },
            { id: "20884", name: "viral", title: "", cover: "" },
            {
              id: "44895",
              name: "trend",
              title: "",
              cover: "",
            },
            { id: "153828", name: "fy", title: "", cover: "" },
            {
              id: "1637342470396934",
              name: "fypシ",
              title: "",
              cover: "",
            },
            {
              id: "1664119477821441",
              name: "fypシ゚viral",
              title: "",
              cover: "",
            },
            { id: "1604302285252613", name: "fypage", title: "", cover: "" },
            {
              id: "1616966643636229",
              name: "fypp",
              title: "",
              cover: "",
            },
            { id: "153828", name: "fy", title: "", cover: "" },
            {
              id: "13270",
              name: "hahaha",
              title:
                "Make us laugh in honour of the 2020 Just For Laughs festival!",
              cover:
                "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/9855668a567ab1e081974626a57eba89",
            },
          ],
          effectStickers: [],
        },
        {
          id: "7030129053512355077",
          secretID: "7030129053512355077",
          text: "#studio #producer #oh #song #kingloui23 #gönntmir",
          createTime: 1636829473,
          authorMeta: {
            id: "6534345858895336448",
            secUid:
              "MS4wLjABAAAAHmgs8n8zvP-G9IdI5DuWJmr-QYEF6COpIYjLA-5auuTaJ2k40cAHW8RcSCKUw0ZT",
            name: "kingloui23",
            nickName: "King Louie",
            verified: false,
            signature:
              "💌 management@midaro-marketing.de\n\nSnap 👻 Aman.D Ruffy\n\nInsta 📸-> Kingloui23",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dcfbd1c57962804632b3c71e03ef27bf~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=3lIMpBZ8t%2FcKqrVPD8S6U2pwybE%3D",
            following: 406,
            fans: 3000000,
            heart: 123700000,
            video: 1103,
            digg: 14400,
          },
          musicMeta: {
            musicId: "7024099975122438918",
            musicName: "Ssio 1 remix",
            musicAuthor: "SHINI",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7024101382118509317.mp3",
            coverThumb:
              "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c85598a1136833561219c1060cc61631~c5_100x100.jpeg?x-expires=1637150400&x-signature=tEFc07OoAqcNtWiA9ykTEYjzZHM%3D",
            coverMedium:
              "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c85598a1136833561219c1060cc61631~c5_720x720.jpeg?x-expires=1637150400&x-signature=4l8xi3yLvA4tJ7UcZVJYL0WKSLo%3D",
            coverLarge:
              "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c85598a1136833561219c1060cc61631~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=%2BQ2E7vFYxtuItAbcrtcmJDBmh8M%3D",
            duration: 30,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/10966d21bf1c44b28ec539e888679bbe?x-expires=1637085600&x-signature=D8cGS403EJKaKRS9HR%2FO9HKbZFA%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/04d3842847604c089b3f44ea6bab2624_1636829475?x-expires=1637085600&x-signature=xa7jLdvZAdAhh6AxJqG8oi4we3Q%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/cc0b7c7f8ae245389419d399a8b80f1a_1636829475?x-expires=1637085600&x-signature=XnQo%2F2W748gRm76sThF0RjG4u7Q%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kingloui23/video/7030129053512355077",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/df4b2b1f2e459a0717b68436a9b52dcf/6193f7de/video/tos/useast2a/tos-useast2a-ve-0068c004/a55000cf1ae5438e9ab5bc810fb6fc84/?a=1233&br=2262&bt=1131&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M292NDY6ZjozOTMzNzczM0ApOTg7ZTZkZGQ5N2Y5ZjQ3O2dfaTZrcjRnZjVgLS1kMTZzcy1gYjQyMzRhL2E0LS5iYjQ6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 8 },
          diggCount: 80900,
          shareCount: 179,
          playCount: 611300,
          commentCount: 179,
          downloaded: false,
          mentions: [],
          hashtags: [
            { id: "9325", name: "studio", title: "", cover: "" },
            {
              id: "46568",
              name: "producer",
              title: "",
              cover: "",
            },
            { id: "5962", name: "oh", title: "", cover: "" },
            {
              id: "5994",
              name: "song",
              title: "",
              cover: "",
            },
            {
              id: "1688612649042946",
              name: "kingloui23",
              title: "",
              cover: "",
            },
            { id: "1601366267082757", name: "gönntmir", title: "", cover: "" },
          ],
          effectStickers: [],
        },
        {
          id: "7004451437585403138",
          secretID: "7004451437585403138",
          text: "Inst: kikakim🤍",
          createTime: 1630850937,
          authorMeta: {
            id: "6785823001336415238",
            secUid:
              "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
            name: "kikakiim",
            nickName: "Kika Kim",
            verified: false,
            signature:
              "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637150400&x-signature=D1QjKGAgWDai63EovNutdvoXB3s%3D",
            following: 89,
            fans: 24100000,
            heart: 628000000,
            video: 827,
            digg: 6732,
          },
          musicMeta: {
            musicId: "6995207293478390534",
            musicName: "Dazaiiiii",
            musicAuthor: "ORKHON",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6995207347371019014.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1662432348780550~c5_100x100.jpeg?x-expires=1637150400&x-signature=6fVjEtvJqrbJ%2Fstg9BR4F6ljl3o%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1662432348780550~c5_720x720.jpeg?x-expires=1637150400&x-signature=ehIYt7cgNLmirW7u9ni5JNPn7Gg%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1662432348780550~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=Odh8cRpEq1hJ7MvYqhcqIAXjl4A%3D",
            duration: 10,
          },
          covers: {
            default:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/91a2befe98cf41978433a16efedf0c22_1630850940?x-expires=1637085600&x-signature=tAJ9WXkHovbJIW1hUZsAiiwgruc%3D",
            origin:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/dbf487ad56084aed88e5049002b798ab_1630850939?x-expires=1637085600&x-signature=O9C1M05muR814EsdGsB2waVNnc0%3D",
            dynamic:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/203b67d596a24afdb63c4fab88ad9506_1630850939?x-expires=1637085600&x-signature=xMScfvFjYj3TnLIK0xNz9VOtnkU%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kikakiim/video/7004451437585403138",
          videoUrl:
            "https://v19.tiktokcdn.com/b0f6ea31f0947fb427783b064fa8c8fc/6193f7e1/video/tos/alisg/tos-alisg-pve-0037c001/3765ca402988464baf303b315f5a4a2f/?a=1233&br=2128&bt=1064&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anE1aDg6ZndmNzMzODczNEApNDg1PGQ6PDs8N2Q3O2k3ZmdgcTNqcjRfcm5gLS1kMS1zcy4vNDRfNTFeNF9hLi0zXjM6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 960, width: 540, duration: 10 },
          diggCount: 849400,
          shareCount: 2175,
          playCount: 6100000,
          commentCount: 4773,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [{ id: "459476", name: "Color Selector" }],
        },
        {
          id: "7002169051820592390",
          secretID: "7002169051820592390",
          text: "@fmdaniel  😂❤️#foryou #fürdich #fy #fyp",
          createTime: 1630319529,
          authorMeta: {
            id: "82213034999283712",
            secUid:
              "MS4wLjABAAAAm2W3DdLeHgCtUp2aHHQNQ9po-UZlBL5O_NdqS04oMvulKnOW5yx7XuZwogsx43Mm",
            name: "adelinadalevska",
            nickName: "Adelinadalevska",
            verified: false,
            signature:
              "Mein insta finde ich auch cool ❤️🤔\n\nAdelina@gl-management.net",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/46d4590d1d45133d138a07d86dc9b523~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=HrA9BGF3I9DkaxsdYY4OI0NwRqI%3D",
            following: 314,
            fans: 1900000,
            heart: 206800000,
            video: 4748,
            digg: 98400,
          },
          musicMeta: {
            musicId: "6966532241035971333",
            musicName: "suono originale",
            musicAuthor: "Salvatore Li Vecchi",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6966532446389078789.mp3",
            coverThumb:
              "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1674648221010946.jpeg?x-expires=1637150400&x-signature=ondI0cht8OhmSpFGimClcZOMWkY%3D",
            coverMedium:
              "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/1674648221010946.jpeg?x-expires=1637150400&x-signature=658hl05%2Fgf0PxHopOHjQwgvKMME%3D",
            coverLarge:
              "https://p77-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/1674648221010946.jpeg?x-expires=1637150400&x-signature=f%2ByEfrk9CaCLhNFskzEi3Lo8Bu4%3D",
            duration: 9,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/35585677a78841878b8e030fd461c13a?x-expires=1637085600&x-signature=4dgkdK1zmv2TpWqyt%2BRpQEQKY5E%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/869c44cfd02d43a69f5d88a68d501d28_1630319531?x-expires=1637085600&x-signature=adX%2BHAt9qlZtbwUhn9UznSraRfo%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9cd80daaf3194672935e76809a624e1c_1630319531?x-expires=1637085600&x-signature=qxrHnXOS9ARBwiwcxKmlgOznjds%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@adelinadalevska/video/7002169051820592390",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/55da18c436ce86254c22c64cf44b303c/6193f7e0/video/tos/useast2a/tos-useast2a-ve-0068c001/0d1f5a0b9a8d41de8f40bfec17050629/?a=1233&br=944&bt=472&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3k5Nzc6ZjplNzMzNzczM0ApOzQ6PDtpOTtnN2k2M2g8ZmdlajFjcjRnNGpgLS1kMTZzc2IzYzAzYjMzYDFfLWAzXjM6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 9 },
          diggCount: 435800,
          shareCount: 8918,
          playCount: 6500000,
          commentCount: 2323,
          downloaded: false,
          mentions: ["@fmdaniel"],
          hashtags: [
            { id: "42164", name: "foryou", title: "", cover: "" },
            {
              id: "5457735",
              name: "fürdich",
              title:
                "Ein Song der nie vergeht!\n\nMacht mit beim neuen Remix von @diemai 😍  \nEinfach ein Duett machen zur aktuellen Single &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;Für Dich&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; und ein live.ly Meet&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;Greet mit Vanessa Mai gewinnen 🔥",
              cover: "",
            },
            { id: "153828", name: "fy", title: "", cover: "" },
            {
              id: "229207",
              name: "fyp",
              title: "",
              cover: "",
            },
          ],
          effectStickers: [],
        },
        {
          id: "7021959964872723717",
          secretID: "7021959964872723717",
          text: "#witzig #spass #ru__de #Russland #deutschland #wasser",
          createTime: 1634927459,
          authorMeta: {
            id: "6850381939447546886",
            secUid:
              "MS4wLjABAAAAFKsq24oM175lc2GB-FANvoQG7FDM0WVBV0cKJ64cv5mynLdXAT6pwwwb4tG_TsXO",
            name: "ru__de",
            nickName: "Alex",
            verified: false,
            signature: "MEMES-HUMOR 😎🙈\nKooperation: ruvsde@gmail.com\n🇷🇺🇩🇪",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/41ae45ffc07246e2eb7f587eee7bf6f7~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=6L7U4CPLzTORdclaxQ%2Fu4QC7o%2Fo%3D",
            following: 2,
            fans: 582200,
            heart: 9300000,
            video: 265,
            digg: 9198,
          },
          musicMeta: {
            musicId: "6708416071420119814",
            musicName: "original sound",
            musicAuthor: "Ethan Jasso239",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/1637805092696101.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1655047951197190~c5_100x100.jpeg?x-expires=1637150400&x-signature=UXkF2H9L9YGpIFG6cUI6JN3CpD0%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1655047951197190~c5_720x720.jpeg?x-expires=1637150400&x-signature=toOJSt06Eo7Y4cZhlxkp7%2F89FNA%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1655047951197190~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=8V1GmnSiN3HCqAD%2FjnR4BjZD2I4%3D",
            duration: 12,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3b7b0af2b21f46dbb5b82c466a01995a?x-expires=1637085600&x-signature=aDmmH3jGP1S5q8X3mBqektrmDJw%3D",
            origin:
              "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/11e4ad687e5d479da11d8358edb6607d_1634927460?x-expires=1637085600&x-signature=m%2FpC2o6IS8yn1%2FnmEF3NOUnjA9k%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/52ec89d6968841838e705ad503036130_1634927460?x-expires=1637085600&x-signature=e738edZQ4mhh5t3pJULl%2FhxwnQE%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@ru__de/video/7021959964872723717",
          videoUrl:
            "https://v39-eu.tiktokcdn.com/b5a1a9de828630d55e91a4a1fccf9c6b/6193f7e0/video/tos/useast2a/tos-useast2a-ve-0068c001/6bf355ed576c432c8ae1ae84c16909f9/?a=1233&br=1444&bt=722&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116122631010189072216170CAF33&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajtoeTQ6ZjdqODMzNzczM0ApNTg0NzhkNGU1N2dnPDczZGc1bF8xcjQwMm1gLS1kMTZzc14tMmMzNl8zM2MyMWBfNjQ6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1026, width: 576, duration: 9 },
          diggCount: 48800,
          shareCount: 1673,
          playCount: 1500000,
          commentCount: 353,
          downloaded: false,
          mentions: [],
          hashtags: [
            { id: "4472613", name: "witzig", title: "", cover: "" },
            {
              id: "199963",
              name: "spass",
              title: "",
              cover: "",
            },
            { id: "1696493359965190", name: "ru__de", title: "", cover: "" },
            {
              id: "4952875",
              name: "russland",
              title: "",
              cover: "",
            },
            {
              id: "204862",
              name: "deutschland",
              title:
                "🇩🇪  musical.ly Deutschland 🇩🇪\n\nGib uns ein LIKE und werde mit etwas Glück gefeatured!!! 💛\n\nFür Features den Hashtag #Deutschland nicht vergessen! ☝",
              cover: "",
            },
            { id: "2735210", name: "wasser", title: "", cover: "" },
          ],
          effectStickers: [],
        },
        {
          id: "7022301777483681026",
          secretID: "7022301777483681026",
          text: "Inst: kikakim🤍",
          createTime: 1635007044,
          authorMeta: {
            id: "6785823001336415238",
            secUid:
              "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
            name: "kikakiim",
            nickName: "Kika Kim",
            verified: false,
            signature:
              "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637150400&x-signature=D1QjKGAgWDai63EovNutdvoXB3s%3D",
            following: 89,
            fans: 24100000,
            heart: 628000000,
            video: 827,
            digg: 6732,
          },
          musicMeta: {
            musicId: "7004351869892004634",
            musicName: "SUA AMIGA DEU SLOWED",
            musicAuthor: "Geonwin Slowed",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7004351833506450202.mp3",
            coverThumb:
              "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be8229b692b4d06639bb295e09b15bfa~c5_100x100.jpeg?x-expires=1637150400&x-signature=vzgW7Y0luWOXeMkePFgGlsunih8%3D",
            coverMedium:
              "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be8229b692b4d06639bb295e09b15bfa~c5_720x720.jpeg?x-expires=1637150400&x-signature=Y5bQQp6jwMbqCfL%2FoA8Twwit%2BaA%3D",
            coverLarge:
              "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be8229b692b4d06639bb295e09b15bfa~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=VXFwMKL6UFzSxeO8cqTm7Gh%2Fd%2FI%3D",
            duration: 12,
          },
          covers: {
            default:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/bc1b66e6c79d481caa84ccac82b224b4_1635007046?x-expires=1637085600&x-signature=f2XfuKqxxosYN8S%2B1lW%2B4GR5mb8%3D",
            origin:
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/89c25403fac74a6e9c1a8deb8a2d5123_1635007046?x-expires=1637085600&x-signature=RBhV%2BpfLpcDICUASEK4mjT1JG%2BM%3D",
            dynamic:
              "https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e843f2eef8c74854bcc77adb45be4f11_1635007046?x-expires=1637085600&x-signature=grgJXv%2BEV391vuFS5xiEhlnYyyw%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kikakiim/video/7022301777483681026",
          videoUrl:
            "https://v16m.tiktokcdn.com/6268558d4bb491ba9765d9859c87a680/6193f7e5/video/tos/alisg/tos-alisg-pve-0037c001/451bb1c8f5594762bbca6de79f008c36/?a=1233&br=2564&bt=1282&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111161226320101890722034F0CEC58&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M293MzY6ZmY2ODMzODczNEApNmZlNzk8NTw4N2Y1OGkzZ2dqZmZtcjRnaG5gLS1kMS1zc15iXi5jLS1hLS8wXjJiMDM6Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 960, width: 540, duration: 12 },
          diggCount: 14800000,
          shareCount: 90700,
          playCount: 174000000,
          commentCount: 219900,
          downloaded: false,
          mentions: [],
          hashtags: [],
          effectStickers: [],
        },
        {
          id: "7007099579569065221",
          secretID: "7007099579569065221",
          text: "Das Tempo ist mir eindeutig zu schnell @edeka 👽 #aliensalive #fyp #fy #viral #edeka #aliens #schnell #einkaufen",
          createTime: 1631467506,
          authorMeta: {
            id: "6916586418522227714",
            secUid:
              "MS4wLjABAAAAht0Om1LPKGSuvMzOtP3MN_bVym10_sCrfVjyeSx-mx1u_0mTwQp1kfBPHyrwJNHZ",
            name: "aliensalive",
            nickName: "aliensalive",
            verified: false,
            signature:
              "Insta: _Aliensalive \n👽 Enjoy the Entertainment 👽\nHannover/ Peine /Braunschweig",
            avatar:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/dff05a63318857fc70511c22d20f4682.jpeg?x-expires=1637150400&x-signature=O32Sv7HzXX2qNw8HjO403Jtx7Ms%3D",
            following: 5,
            fans: 219000,
            heart: 3100000,
            video: 167,
            digg: 1088,
          },
          musicMeta: {
            musicId: "7007099440016247558",
            musicName: "Originalton",
            musicAuthor: "aliensalive",
            musicOriginal: true,
            musicAlbum: "",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7007099541002521349.mp3",
            coverThumb:
              "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dff05a63318857fc70511c22d20f4682.jpeg?x-expires=1637150400&x-signature=HjTWp158yGkbEID6%2BtWw6%2BHI1mQ%3D",
            coverMedium:
              "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/dff05a63318857fc70511c22d20f4682.jpeg?x-expires=1637150400&x-signature=f4ZL3A64Aypgiw6zVV6LNsr2Bzs%3D",
            coverLarge:
              "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/dff05a63318857fc70511c22d20f4682.jpeg?x-expires=1637150400&x-signature=O32Sv7HzXX2qNw8HjO403Jtx7Ms%3D",
            duration: 15,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4e97c6a730754ff3aff14cc70bfed9f8_1631467509?x-expires=1637085600&x-signature=odF%2FW4%2Fvlii5IX023QAdEhIgljc%3D",
            origin:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b35a2b529e7846098ee864b7e5e9ccbc_1631467507?x-expires=1637085600&x-signature=i3bhyc6OrxmbQFRUTkKzxNJicZk%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/323de740fd5b448abf3eaf262e5777e6_1631467508?x-expires=1637085600&x-signature=1QnbwqAN9y5dT6WNo2HvjKaAFTY%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@aliensalive/video/7007099579569065221",
          videoUrl:
            "https://v16m.tiktokcdn.com/9d74951bc9bc5174c1f5667bb3e7493a/6193f7e8/video/tos/useast2a/tos-useast2a-pve-0068/d3a4bc52347e40c08807ff5db7d6144d/?a=1233&br=2180&bt=1090&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111161226320101890722034F0CEC58&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzp0ZmQ6ZnA2NzMzNzczM0ApOjM2ZzczNGU7N2U5aTc2ZGdlLnNncjRvY3NgLS1kMTZzczM1LzE2Xy8uNTU0Y141NC46Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 15 },
          diggCount: 270500,
          shareCount: 19300,
          playCount: 3400000,
          commentCount: 3815,
          downloaded: false,
          mentions: ["@edeka"],
          hashtags: [
            {
              id: "1671454914899973",
              name: "aliensalive",
              title: "",
              cover: "",
            },
            { id: "229207", name: "fyp", title: "", cover: "" },
            {
              id: "153828",
              name: "fy",
              title: "",
              cover: "",
            },
            { id: "20884", name: "viral", title: "", cover: "" },
            {
              id: "4277713",
              name: "edeka",
              title: "",
              cover: "",
            },
            { id: "6310", name: "aliens", title: "", cover: "" },
            {
              id: "3060144",
              name: "schnell",
              title: "",
              cover: "",
            },
            { id: "7356790", name: "einkaufen", title: "", cover: "" },
          ],
          effectStickers: [],
        },
        {
          id: "7030870356793511174",
          secretID: "7030870356793511174",
          text: "#studio #rap #girls #producer #shit #kingloui23 #gönntmir",
          createTime: 1637002071,
          authorMeta: {
            id: "6534345858895336448",
            secUid:
              "MS4wLjABAAAAHmgs8n8zvP-G9IdI5DuWJmr-QYEF6COpIYjLA-5auuTaJ2k40cAHW8RcSCKUw0ZT",
            name: "kingloui23",
            nickName: "King Louie",
            verified: false,
            signature:
              "💌 management@midaro-marketing.de\n\nSnap 👻 Aman.D Ruffy\n\nInsta 📸-> Kingloui23",
            avatar:
              "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dcfbd1c57962804632b3c71e03ef27bf~c5_1080x1080.jpeg?x-expires=1637150400&x-signature=kSG3fr0SQ%2BElr90sC%2B8zMRHmpXQ%3D",
            following: 406,
            fans: 3000000,
            heart: 123700000,
            video: 1103,
            digg: 14400,
          },
          musicMeta: {
            musicId: "7022365762715322369",
            musicName: "Be a Hoe/Break a Hoe",
            musicAuthor: "Shirin David",
            musicOriginal: false,
            musicAlbum: "Be a Hoe/Break a Hoe",
            playUrl:
              "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/1740478e39b34bd992682c6db9c84202",
            coverThumb:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/6167fbef911249daa41bb1c052ff7a5e~c5_100x100.jpeg",
            coverMedium:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/6167fbef911249daa41bb1c052ff7a5e~c5_200x200.jpeg",
            coverLarge:
              "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/6167fbef911249daa41bb1c052ff7a5e~c5_720x720.jpeg",
            duration: 44,
          },
          covers: {
            default:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f943832b36c24a0e9045715960b5c6d0?x-expires=1637085600&x-signature=4EjgsY5ZDLv%2BvfvkFRZBNAPmLBg%3D",
            origin:
              "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4b4b4e38f9d84ff68bf26d60033435d2_1637002074?x-expires=1637085600&x-signature=k02YNdRAUDI3HTIROr1ZKsK8Jqc%3D",
            dynamic:
              "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/de8eee4c2c394bdc9e98ffda1eae4f25_1637002074?x-expires=1637085600&x-signature=K%2BHUhsqaww1fdljXjB4MmfkS%2B8M%3D",
          },
          webVideoUrl:
            "https://www.tiktok.com/@kingloui23/video/7030870356793511174",
          videoUrl:
            "https://v16m.tiktokcdn.com/19fc0cdd139c5d8efb598c11b5af9c8e/6193f7e6/video/tos/useast2a/tos-useast2a-ve-0068c003/4d8a69a5ea73409ea1117a96d925a7af/?a=1233&br=2080&bt=1040&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111161226320101890722034F0CEC58&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anU4dDs6Zm5kOTMzNzczM0ApZTY6ZGloNGQ2NzozNGc5ZGdjc2tucjQwajZgLS1kMTZzczEuNWMxLmAwLjNeYDJfYi06Yw%3D%3D&vl=&vr=",
          videoUrlNoWaterMark: "",
          videoApiUrlNoWaterMark: "",
          videoMeta: { height: 1024, width: 576, duration: 13 },
          diggCount: 20900,
          shareCount: 78,
          playCount: 126400,
          commentCount: 98,
          downloaded: false,
          mentions: [],
          hashtags: [
            { id: "9325", name: "studio", title: "", cover: "" },
            {
              id: "5232",
              name: "rap",
              title: "",
              cover: "",
            },
            { id: "6597", name: "girls", title: "", cover: "" },
            {
              id: "46568",
              name: "producer",
              title: "",
              cover: "",
            },
            { id: "7114", name: "shit", title: "", cover: "" },
            {
              id: "1688612649042946",
              name: "kingloui23",
              title: "",
              cover: "",
            },
            { id: "1601366267082757", name: "gönntmir", title: "", cover: "" },
          ],
          effectStickers: [],
        },
      ],
    };
    setTimeout(() => {
      resolve(response);
    }, timeout);
  });
}

const HomeView = () => {
  const [trendingVideo, setTrendingVideo] = useState([]);

  useEffect(() => {
    getFeed().then((response) => {
      setTrendingVideo(response.data);
    });
  }, []);

  return (
    <>
      <VideoList>
        {trendingVideo.map((video) => (
          <VideoListItem
            key={video.id}
            video={video}
            name={video.authorMeta.name}
          />
        ))}
      </VideoList>
    </>
  );
};

export default HomeView;
