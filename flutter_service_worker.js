'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1a992ed80ed1d56294fa9f955e40543e",
"assets/AssetManifest.bin.json": "985bed22be93e803e8ccd1b060349f78",
"assets/AssetManifest.json": "2ed816561eafaf59b5f871dcf3027d59",
"assets/assets/general/background.jpg": "479c9a141796e7c83eecb35ec52733c5",
"assets/assets/general/BenjaminFinlay.pdf": "0120c6acd2d891edd89e9adeb57e1928",
"assets/assets/general/downloadonappstore.png": "d5e35df47e2581ccf48b39f5a1ae5611",
"assets/assets/general/getongoogleplay.png": "bd13093f4015bb8b2d99dcea8a300606",
"assets/assets/general/logoColour.png": "d9b3ae52bdc4d63bf962c9924a9139b1",
"assets/assets/general/logoWhite.png": "59936bd8a90413d06cd15bc51ebfdae8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ec5ffc9e69f98d004cc0f4323a54ea87",
"assets/lib/projects/3dAudio/3d_audio.dart": "967f82093609f87433b5c2ae097f330f",
"assets/lib/projects/3dAudio/audio1.png": "8005d994996915f49dfaa39b394b3880",
"assets/lib/projects/3dAudio/AudioJamCover.png": "16fb3fa2978521ee64123a9ebd23fabc",
"assets/lib/projects/3dAudio/audiologo.png": "6575b74c539c179a8eda0abac3ce6654",
"assets/lib/projects/3dAudio/audioname.png": "6575b74c539c179a8eda0abac3ce6654",
"assets/lib/projects/adaptiveLevelGeneration/11.jpg": "c90e9bc3a22f5fe1c465099327dc70d0",
"assets/lib/projects/adaptiveLevelGeneration/111.png": "fe6e7b3d7db4096e3945a5a22f38739c",
"assets/lib/projects/adaptiveLevelGeneration/22.jpg": "04540f2c16325ad5825da787abf04725",
"assets/lib/projects/adaptiveLevelGeneration/222.png": "b1db1ccf8717f61c98c36901fa7be096",
"assets/lib/projects/adaptiveLevelGeneration/33.jpg": "1b7763fe680dab37f4a3f00e0c30aa4b",
"assets/lib/projects/adaptiveLevelGeneration/333.png": "c613344f61daa71100ec3bbe13b2b3fd",
"assets/lib/projects/adaptiveLevelGeneration/44.jpg": "101611b8c1a3970b1ed17bd8a72552a1",
"assets/lib/projects/adaptiveLevelGeneration/444.png": "7578dbae1fc76643aac14f49bf384aaf",
"assets/lib/projects/adaptiveLevelGeneration/55.jpg": "545c267d22ca7f72dc77600d20c3e4f6",
"assets/lib/projects/adaptiveLevelGeneration/66.jpg": "e1c37a52882ec39dcf34ab978a7c7526",
"assets/lib/projects/adaptiveLevelGeneration/77.jpg": "786ed3ce94a49a4a4b8f4bc5bc4b6dd7",
"assets/lib/projects/adaptiveLevelGeneration/88.png": "b19febf41c48d3c6f99e36a05b27dfe3",
"assets/lib/projects/adaptiveLevelGeneration/99.png": "4f4156c9c21fecffebc5fb47f4fcd8ae",
"assets/lib/projects/adaptiveLevelGeneration/adaptivelevel.png": "26eddcaff87b9756c675e2693ee0fd49",
"assets/lib/projects/adaptiveLevelGeneration/adaptive_level_generation.dart": "548fe42ca0907ddb42ed98018bc80415",
"assets/lib/projects/adaptiveLevelGeneration/ImmortalityInteractiveCover.png": "afdf4a002ad5a7bbbd8459b5d754818a",
"assets/lib/projects/altAR/all%2520worlds%2520citizens%2520group%25201.png": "85e04d018ae660382b03e8e8158d5519",
"assets/lib/projects/altAR/all%2520worlds%2520citizens%2520group%2520final%2520no%2520text.png": "96a08158f73af9c202fce354babebfcb",
"assets/lib/projects/altAR/alt1.jpg": "844b163df273ba0fdbc72e2b5c58f182",
"assets/lib/projects/altAR/alt2.jpg": "6dc37f6d834423a7934a58d6018dccbb",
"assets/lib/projects/altAR/alt3.jpg": "decbdf23a927e43b1acae8126a7965eb",
"assets/lib/projects/altAR/alt4.jpg": "b6babbcd38893e4df54f858754247e0f",
"assets/lib/projects/altAR/altAR.jpg": "9957ddb6c6d786f426e694f4c301a088",
"assets/lib/projects/altAR/alt_ar.dart": "ab9e5ef4d1d13008b3f6c34ca22c9662",
"assets/lib/projects/altAR/Anywhere-Favicon.png": "96529b43d58b5c4f43cc41f5cb6b453a",
"assets/lib/projects/altAR/AnywhereFestivalCover.png": "4b07ebdfdfbcb4d2c5a2437c19321afc",
"assets/lib/projects/altAR/Countdown%2520launch.png": "36c8d968d8398e84e28b9725be4138b0",
"assets/lib/projects/altAR/poster_colour_.png": "fd3f2e006831350b5bf1ed3b86071aa5",
"assets/lib/projects/altAR/poster_colour_no_image_texture.png": "d9d4a00564833bc5f9572677a896ffa5",
"assets/lib/projects/altAR/social%2520media%2520intro%2520blue.png": "21f6e03f50437d5494c112dd70641096",
"assets/lib/projects/altAR/VoidwithOrb.png": "4b0d1f4a7325fb37ebfa7578841c374a",
"assets/lib/projects/anatoMe/anatome.dart": "2f4f9ff1b2aaef1a51e02776914d5778",
"assets/lib/projects/anatoMe/AnatoMe.png": "4bb1f2c595e69ec36326dec8c9d05b30",
"assets/lib/projects/anatoMe/ImageOne.jpg": "af17c565f0f959b0b6a2a8321dfc6f24",
"assets/lib/projects/anatoMe/ImageTwo.jpg": "6011193b2cbf2d33bac0fe10e30d2a82",
"assets/lib/projects/anatoMe/SpinDriftCover.png": "153bd3c568db6f06507868f6b5be5f53",
"assets/lib/projects/apocalypseNow/ap1.jpg": "e7a374bec981600c299a2c296d9091e3",
"assets/lib/projects/apocalypseNow/ap2.jpg": "929041bd73df56c1d48ca21062f28bf8",
"assets/lib/projects/apocalypseNow/ap3.jpg": "921d6f4af5bc297ea7aa67e852e56030",
"assets/lib/projects/apocalypseNow/ap4.jpg": "2ed5f0fe7b653d62d72459db6aeb3d11",
"assets/lib/projects/apocalypseNow/ap5.jpg": "15d94b7f7f20477b0e4a547bd89f87a4",
"assets/lib/projects/apocalypseNow/ap6.jpg": "e4609521addf41a31ca9c5004cb10244",
"assets/lib/projects/apocalypseNow/apocalypseNow.jpg": "0142e606f37df2d68bc312980440ab6f",
"assets/lib/projects/apocalypseNow/apocalypse_now.dart": "827ce1af0749986e2d8579c0fe1ca838",
"assets/lib/projects/apocalypseNow/snail1.jpg": "528c06169a1b8bd56f329fcd05f85062",
"assets/lib/projects/apocalypseNow/snail2.jpg": "0c224e5074ec0cb4b3f33850a1e57e34",
"assets/lib/projects/apocalypseNow/snail3.jpg": "94cf712d888ee6f78274b4bae3bb57ec",
"assets/lib/projects/apocalypseNow/snailAndSeek.png": "2d66b71ff6254b4d95c7f20172156ee7",
"assets/lib/projects/apocalypseNow/SunjamCover.png": "ba2c0e68a72ca06fa4415871b1345ebb",
"assets/lib/projects/archegnomeies/arch1.jpg": "d7f0ff9fde1dc999c29ac853e8f6416d",
"assets/lib/projects/archegnomeies/arch2.jpg": "9ac582cbfcbfc44fc116846a7c8da748",
"assets/lib/projects/archegnomeies/arch3.jpg": "d34d7690f17f00fa2d5a3261329a789c",
"assets/lib/projects/archegnomeies/arch4.jpg": "d81bbbda6864df60bc0811c064a57a77",
"assets/lib/projects/archegnomeies/arch5.jpg": "e16036c759a9c800d02798c40bf72238",
"assets/lib/projects/archegnomeies/archegnomeies.dart": "78083344c17f8d994992b362af3b824f",
"assets/lib/projects/archegnomeies/archegnomeies.png": "2f5732916530d043ed394b3b1f3bfdf9",
"assets/lib/projects/archegnomeies/SeriousGamesCover.png": "f2ff21455e85b6b5a0f6beadbceaffda",
"assets/lib/projects/arDragon/ar-dragon-1.jpg": "868f43f27a38bbb3ea99d422c32f2277",
"assets/lib/projects/arDragon/ar-dragon-2.jpg": "a8e92b470bcf6fc5d79142749e424b6f",
"assets/lib/projects/arDragon/ardragon-logo.jpg": "3badd5eca40c776fb42f64f98a582a2e",
"assets/lib/projects/arDragon/ardragon.dart": "c6debb0ce0077d8796f305af44ee5f65",
"assets/lib/projects/battleDonut/battleDonut.png": "eee7fe8c85e9b8d5cf574f73bf9a0b12",
"assets/lib/projects/battleDonut/battle_donut.dart": "8c79e6260f3c4f97808b9f4025ab145c",
"assets/lib/projects/battleDonut/bd1.png": "e1992513d43f2be6b0dbc23f35976658",
"assets/lib/projects/battleDonut/bd10.gif": "63b762311ecbefbf7836331b1c48a30e",
"assets/lib/projects/battleDonut/bd11.gif": "47a452e5849a5405d4677aab6372268d",
"assets/lib/projects/battleDonut/bd12.png": "d5730c64a889659e7f7c5f0dc132f8ec",
"assets/lib/projects/battleDonut/bd13.png": "c02577c29d5c985395a3cd9571e12f2a",
"assets/lib/projects/battleDonut/bd2.png": "468dd6be122beb1f46ff965a401ddf76",
"assets/lib/projects/battleDonut/bd3.png": "b3e17e15195b170266cc1cba584e64d9",
"assets/lib/projects/battleDonut/bd4.png": "5c583836659a2fdd242ecc186b82fc15",
"assets/lib/projects/battleDonut/bd5.png": "df255ca1e07f13f2e215245b41ef2efa",
"assets/lib/projects/battleDonut/bd6.png": "ac811122e35938d3c2dcf0f210d49b71",
"assets/lib/projects/battleDonut/bd7.png": "e57c20745be23a172fb3c1188fc52621",
"assets/lib/projects/battleDonut/bd8.png": "f2f8181b398c06584677ec6e4a59ad09",
"assets/lib/projects/battleDonut/bd9.png": "1b7a2c28557ee7d87579fa6c828af4cc",
"assets/lib/projects/battleDonut/SeriousGamesCover.png": "f2ff21455e85b6b5a0f6beadbceaffda",
"assets/lib/projects/battleDonut/title.png": "70d3e9c733efc81c2bcefbe27e33aa2b",
"assets/lib/projects/birdsOnShow/bird1.jpg": "a3caec2809717b06f3a628b786e53811",
"assets/lib/projects/birdsOnShow/bird2.jpg": "fb5e66a6ff2f2e8a6e724432cb474bd4",
"assets/lib/projects/birdsOnShow/bird3.jpg": "a55af324a14a28ac4081a7d4ec838a4d",
"assets/lib/projects/birdsOnShow/bird4.jpg": "1e2175f451239fb17e7ceab2fd9c1123",
"assets/lib/projects/birdsOnShow/birds.jpg": "d5d6d154132cf356a17f31ed66e26340",
"assets/lib/projects/birdsOnShow/birdsOnShow.jpg": "555bdabe882845c89bd205047a949826",
"assets/lib/projects/birdsOnShow/birds_on_show.dart": "ff3efa6eee13afed743329be04eddf36",
"assets/lib/projects/birdsOnShow/MaryCairncrossCover.png": "61b3bd04be0645ab15bb5b70c7f879b5",
"assets/lib/projects/birdsOnShow/marycairnlogo.png": "eae1bbd1126a347cb156233d467e05ab",
"assets/lib/projects/birdsOnShow/target1_scaled.jpg": "6601e892f99947503046e94618889309",
"assets/lib/projects/birdsOnShow/target2_scaled.jpg": "ab4ce32b65602ecc5078be94d8565d88",
"assets/lib/projects/birdsOnShow/target3_scaled.jpg": "130449b592396c6a2f09be0393833474",
"assets/lib/projects/birdsOnShow/target4_scaled.jpg": "c24098857f9ebcb2f74c104185fe90bf",
"assets/lib/projects/birdsOnShow/target5_scaled.jpg": "d6d194c12353c9b83f34cdd4fcf89ff5",
"assets/lib/projects/birdsOnShow/unnamed-1.png": "94b23d796aaa4f5b13e2b7f8beceeddd",
"assets/lib/projects/cityFight/1200px-Australian_Army_Emblem.svg.png": "173901adc7ac71d7c73460b9c425ef66",
"assets/lib/projects/cityFight/Army.png": "079c8dee8dbf1e62f314a34d2b387b5b",
"assets/lib/projects/cityFight/ArmyCover.png": "14a29f29b3c201a4a0fc87d0d0f5cbd4",
"assets/lib/projects/cityFight/cityFightLogo.png": "95f9928c1c6704890fc4f06cfc966b9f",
"assets/lib/projects/cityFight/cityfighttitle.png": "e946f7f17d90d9b049eac5fa59b0402d",
"assets/lib/projects/cityFight/city_fight.dart": "22a1f1bacf093c1a3d7aec72d291c8db",
"assets/lib/projects/cityFight/pic1.png": "d7aab998d04449ef4ea5a6ed86724fe1",
"assets/lib/projects/cityFight/pic2.png": "b18fe7d94c09e1fd1c8d99d8b95fcf58",
"assets/lib/projects/cityFight/pic3.png": "f263f81c432b06f22f814575ef446787",
"assets/lib/projects/cityFight/pic4.png": "13b422cc1ca30f3058e40eb9245ff53f",
"assets/lib/projects/cityFight/pic5.png": "5d96343c9c2d58a1fea39c7f2466e254",
"assets/lib/projects/cityFight/TheAustralianArmy.png": "b2fdde4b28e67f0570f08c436d8bc51f",
"assets/lib/projects/conjoin/1.jpg": "34ac7aa4301e45118b9ed735eb95581f",
"assets/lib/projects/conjoin/2.jpg": "3aff1ce050afbdb3bc73ca85e480ad15",
"assets/lib/projects/conjoin/3.jpg": "1475f009c491ca1f5b1c925aca7c6b03",
"assets/lib/projects/conjoin/4.jpg": "99a8ab5dae6d4ec32d2cb3765dfdecdd",
"assets/lib/projects/conjoin/BannerNew.png": "373620643ee98a4e4d5a492a7c78b69b",
"assets/lib/projects/conjoin/conjoin.dart": "a97dd678f20ddaea3dd2e36993bc5c72",
"assets/lib/projects/conjoin/conjoin.jpg": "34ac7aa4301e45118b9ed735eb95581f",
"assets/lib/projects/conjoin/ConjoinLogo.png": "e60c20a020011b61ff6d426c939366db",
"assets/lib/projects/conjoin/FullLogo.png": "31daa4af6427a0fce2b317c604aa5cf2",
"assets/lib/projects/conjoin/PersonalCover.png": "f5500ab938b2376cf777785f083d3e1c",
"assets/lib/projects/dndMapViewer/1.jpg": "15b691fb56205f43047cb54f90f0bf92",
"assets/lib/projects/dndMapViewer/11.jpg": "6b871bee3ade0d3388188314f15a263a",
"assets/lib/projects/dndMapViewer/2.jpg": "663956130e59cf90276bc0ffd9470fc2",
"assets/lib/projects/dndMapViewer/22.jpg": "b045e5223d0f1f53f2522a3ed30cfbab",
"assets/lib/projects/dndMapViewer/3.jpg": "016fb4df1c8598fefeb4e076e2b1823d",
"assets/lib/projects/dndMapViewer/4.jpg": "0b22fc0516e08aeeac961302cc8828c7",
"assets/lib/projects/dndMapViewer/44.jpg": "967b38a3681cca7cb40357f8d32128d5",
"assets/lib/projects/dndMapViewer/5.jpg": "475405a56e5cad7dab11b41178a185bd",
"assets/lib/projects/dndMapViewer/6.jpg": "f1c491fc3a0553ac8bad40ba91caa04c",
"assets/lib/projects/dndMapViewer/8.jpg": "dc6b68a87e65207b88c9094365e08ced",
"assets/lib/projects/dndMapViewer/d&dViewerLogo.png": "a8f3cbedea2ed2358658bb1ce583f0b8",
"assets/lib/projects/dndMapViewer/easy_tabletop.dart": "d899912b6ac2358d426ea684966f739c",
"assets/lib/projects/dndMapViewer/PersonalCover.png": "f5500ab938b2376cf777785f083d3e1c",
"assets/lib/projects/fishybits2/fishybits1.png": "07ecf9ff71a6b5ddf60f17ea4605516c",
"assets/lib/projects/fishybits2/fishybits2.dart": "cfcd33de62322b0ba9a374ff5097d1f6",
"assets/lib/projects/fishybits2/fishybits2.png": "5e37b2184612a50f13e76dd633850a7c",
"assets/lib/projects/fishybits2/fishybits3.png": "17739bc61910a8c641b1e9acb8724699",
"assets/lib/projects/fishybits2/fishybits4.png": "84f1602d9d011aa7e2d76672f94ad935",
"assets/lib/projects/fishybits2/PlaySideCover.png": "9e766f94185164083ae1b1e7016558ea",
"assets/lib/projects/fishybits2/playsidelogo.png": "2eacf7734ec96ca388ed6423e9066143",
"assets/lib/projects/flick/flick.dart": "3c5da5b331281ac8ed5b70eb1f1e9461",
"assets/lib/projects/flick/flick.jpg": "eea7c4a9f47afdcd396b2aae292d1850",
"assets/lib/projects/flick/flick1.jpg": "313e949eeac05488ba3de3e3177a94f9",
"assets/lib/projects/flick/flick2.jpg": "74ab9a9647124eef5bfdb4c575422f39",
"assets/lib/projects/flick/flick3.jpg": "ec9a8df20e5dc43f6503f97aa33c9a7c",
"assets/lib/projects/flick/flick4.jpg": "58d1db8d0b52d8ba34f8eef9464af689",
"assets/lib/projects/flick/flick5.jpg": "e3e4c48409fb82b2d2c5098edaa634c8",
"assets/lib/projects/flick/flick6.jpg": "98078ece2c47aa0c6a2fa93978132f40",
"assets/lib/projects/flick/GGJ00_Logo_Dark.png": "720d42ba075d53fd6c3076f3ca8c040e",
"assets/lib/projects/flick/GlobalGameJamCover.png": "f8fdce449df32ece83cc5197e54d1c23",
"assets/lib/projects/gympieSupport/1.jpg": "51a1c323187ac28563f377428ca60333",
"assets/lib/projects/gympieSupport/2.jpg": "1ee7eee3468f34a9082274e514caf043",
"assets/lib/projects/gympieSupport/3.jpg": "9b14aa985d8f186ab09b654bedc6acf4",
"assets/lib/projects/gympieSupport/4.jpg": "0ad56943a48c03cb29ba9bb224d80a91",
"assets/lib/projects/gympieSupport/5.jpg": "3233fff60be8aa07a78534865e408662",
"assets/lib/projects/gympieSupport/6.jpg": "e6d2abd4e0a76de8888976d1441d161c",
"assets/lib/projects/gympieSupport/7.jpg": "6da0e3830a13d4c89d93a592be879cb4",
"assets/lib/projects/gympieSupport/8.jpg": "7002084e931f9affa639908de20d366d",
"assets/lib/projects/gympieSupport/9.jpg": "1ee314ef0b5f818947052da764f90ff4",
"assets/lib/projects/gympieSupport/CommunityActionCover.png": "7a2fa061c8b8fe90c6ebeff3f015b9f5",
"assets/lib/projects/gympieSupport/gympieSupport.jpg": "51a1c323187ac28563f377428ca60333",
"assets/lib/projects/gympieSupport/gympie_support.dart": "625f3f0472aece9bb8b1a4fe15aa6fe1",
"assets/lib/projects/gympieSupport/logo1x.png": "10eeff626ceec9191f16659841f8876f",
"assets/lib/projects/logowhite.png": "59936bd8a90413d06cd15bc51ebfdae8",
"assets/lib/projects/nda.png": "7291ac1d1eff7e5e1bd5ceedf4590713",
"assets/lib/projects/papersimulation/1.jpg": "66b0f6b2008c396f81f6a3942642ca9a",
"assets/lib/projects/papersimulation/2.jpg": "8f75cf60dc337ccc03b81f655a88f130",
"assets/lib/projects/papersimulation/3.jpg": "5553a2d1400fe911ef01f05a9a77e4aa",
"assets/lib/projects/papersimulation/4.jpg": "d6882e271a1aa1f88fa36ffcaf266a70",
"assets/lib/projects/papersimulation/EDVR.jpg": "e5d2b2dcaf7bccb525c91ebffa8f05b4",
"assets/lib/projects/papersimulation/EF_NDVR_stacked_rgb.png": "add62a7fbed6a4556ffc5dad69a1bb1e",
"assets/lib/projects/papersimulation/EndeavourFoundationCover.png": "6125c57204be009b0298e9828416220b",
"assets/lib/projects/papersimulation/Engage-Research-Logo-Large-Dark.png": "2c1efca5bcfc748f4da201f73fc794da",
"assets/lib/projects/papersimulation/paper_simuation.dart": "06be8afa80dc7d7a911ecaa9d497ef56",
"assets/lib/projects/portfolio/background.jpg": "479c9a141796e7c83eecb35ec52733c5",
"assets/lib/projects/portfolio/PersonalCover.png": "f5500ab938b2376cf777785f083d3e1c",
"assets/lib/projects/portfolio/portfolio.dart": "ca768fd15920d814ddcee944e60b0e1f",
"assets/lib/projects/portfolio/portfolio1.jpg": "20cece36d5b1e5415ace8c78dd11f7ce",
"assets/lib/projects/portfolio/portfolio2.jpg": "d50c08f24dd651f49d48ed35aead6ea1",
"assets/lib/projects/portfolio/portfolio3.jpg": "5806e4c054ee7d39c4372fc10386cd05",
"assets/lib/projects/portfolio/portfolio4.jpg": "a5db05c3b86f1cda46f303a1550a6f9b",
"assets/lib/projects/portfolio/portfolio5.jpg": "94403f68df30731168290fad62fee239",
"assets/lib/projects/portfolio/portfolio6.jpg": "0c0a863ac6fa55a713568ece4dcff205",
"assets/lib/projects/portfolio/portfolio7.jpg": "d042e8fa0a30d59ee3c2f2b1d875212f",
"assets/lib/projects/portfolio/portfolio8.jpg": "2347f5b3c336a85d065257407b88dca4",
"assets/lib/projects/portfolio/portfolio9.jpg": "5909f063c34581876585be02afacd6dd",
"assets/lib/projects/projectManager/1.jpg": "586d8880c64a700987ff6d6ee47e13fd",
"assets/lib/projects/projectManager/2.jpg": "c516309262ce858d204f8019d84e47ee",
"assets/lib/projects/projectManager/3.jpg": "9bfbbbb0dd920e01ae60c3da9350db72",
"assets/lib/projects/projectManager/4.jpg": "3444a85ec72414b109030b80a2b91822",
"assets/lib/projects/projectManager/5.jpg": "4b3719faac7cea3aada7f7d1f44b6e72",
"assets/lib/projects/projectManager/6.jpg": "a6407debb1b4dcb10a09d6e4fa62c392",
"assets/lib/projects/projectManager/cidselDatabase.jpg": "e11f528b56172b6238274f9d5e4410bd",
"assets/lib/projects/projectManager/https___cdn.evbuc.com_images_59047458_214337804083_1_original.png": "6ea140bed08a3cff4819eb07ee7ada81",
"assets/lib/projects/projectManager/project_manager.dart": "eb03cc5e660c8ebb41dc6839e7c405ef",
"assets/lib/projects/projectManager/USCCidselCover.png": "3f29fe017fd232bbf88aa26f13705e04",
"assets/lib/projects/runPharaohRun/GGJ00_Logo_Dark.png": "720d42ba075d53fd6c3076f3ca8c040e",
"assets/lib/projects/runPharaohRun/GlobalGameJamCover.png": "f8fdce449df32ece83cc5197e54d1c23",
"assets/lib/projects/runPharaohRun/rp1.png": "b628c5b561efeb1e1b7a49e81cc9ad3f",
"assets/lib/projects/runPharaohRun/rp2.png": "42b7d9b9d04812afba73e2aaff468a95",
"assets/lib/projects/runPharaohRun/rp3.png": "d89db380f1f2b4c43abe020009b720c1",
"assets/lib/projects/runPharaohRun/runPharaohRun.jpg": "701c6b45da76b8360aebf961672f1d86",
"assets/lib/projects/runPharaohRun/run_pharaoh_run.dart": "891a3c04d9e8b19cb50bbcc64228a17f",
"assets/lib/projects/shibaeternity/shibaeternity.dart": "67186b0b1c9d71b0c4e7dbc00030b6f8",
"assets/lib/projects/shibaeternity/shibaeternity1.png": "99a79bc191c720a06ceca9478499bf97",
"assets/lib/projects/shibaeternity/shibaeternity2.png": "f8cf8eecd5df3d86669a82a6e9cd0006",
"assets/lib/projects/shibaeternity/shibaeternity3.png": "f5ad4fae55d65babb3e3d5d5ca789bbd",
"assets/lib/projects/shibaeternity/shibaeternity4.png": "fe05e56bbe211ab223c453edcdd41129",
"assets/lib/projects/shibaeternity/shibaeternity5.png": "a85b1b55e1eaa8130f26474056ca4d2b",
"assets/lib/projects/shibaeternity/Shiba_Eternity_Logo.png": "69fd6dcee0aaecd560d2ac67ceb83ad6",
"assets/lib/projects/timeJump/SunjamCover.png": "ba2c0e68a72ca06fa4415871b1345ebb",
"assets/lib/projects/timeJump/timeJump.png": "0524f6ab8d7973cb7bf9aa3b17927ca8",
"assets/lib/projects/timeJump/time_jump.dart": "d773a2b45c67abbdfadbeb84516a9720",
"assets/lib/projects/timeJump/tj1.png": "e2a28d313c49a954202d7528017f763c",
"assets/lib/projects/timeJump/tj2.jpg": "587edfce546a35b5e39c290606834e09",
"assets/lib/projects/timeJump/tj3.jpg": "2f47a26c627028615bcb72cbe84a2523",
"assets/lib/projects/timeJump/tj4.jpg": "a38520ee3c388af64a5fc3e43b0c478d",
"assets/lib/projects/timeJump/tj5.jpg": "f5b1b3ce58d6f612ee86cde579017bb0",
"assets/lib/projects/vrTreadmill/Engage-Research-Logo-Large-Dark.png": "2c1efca5bcfc748f4da201f73fc794da",
"assets/lib/projects/vrTreadmill/EngageLabCover.png": "36d920b55126b48eedd541428b763011",
"assets/lib/projects/vrTreadmill/omnitread.jpeg": "582a03aa52c35f9f3272c3f139903801",
"assets/lib/projects/vrTreadmill/Screenshot_4.png": "8018cdec1278283813b708d8d10d60b9",
"assets/lib/projects/vrTreadmill/Screenshot_5.png": "6d484d2007a130f2cd3b677ef367833e",
"assets/lib/projects/vrTreadmill/tracker.webp": "d0159a4826e947a3b794367dd8c4f4eb",
"assets/lib/projects/vrTreadmill/treadmill.jpg": "ec4316e449d39f89a014e771f226e8c5",
"assets/lib/projects/vrTreadmill/vive.jpg": "00321169c16456f5f38d0d2ed65484dc",
"assets/lib/projects/vrTreadmill/vrOmniTread.png": "0d85f2c76903ec31ba3dd17108f7a7ba",
"assets/lib/projects/vrTreadmill/vr_treadmill.dart": "b31b596809e3079fd94fd3d62058f973",
"assets/NOTICES": "6afffdd6d7ff1f95ed97699ce1fd4a87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "fab4b5e64bb72ef82bb25f162a2dc0e4",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b4bc42ffd8dc1377dffa5125e296bf0d",
"icons/background.jpg": "479c9a141796e7c83eecb35ec52733c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "eeac293a171949a96066d1819579fc1a",
"/": "eeac293a171949a96066d1819579fc1a",
"main.dart.js": "d3f3f8ab8805dcc67ef45fb1dff5463a",
"manifest.json": "ba39fc3d6e194e7ecde95882d5b387d2",
"version.json": "26a9d3de6514704fe512b9ab261036e4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
