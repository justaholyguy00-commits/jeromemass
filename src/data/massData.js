// Order of Mass data - English and Chinese (Simplified with Pinyin)
// Based on the Roman Missal, Third Edition

export const massData = {
  title: {
    english: "The Order of Mass",
    chinese: "感恩祭典",
    pinyin: "gǎn ēn jì diǎn"
  },
  sections: [
    {
      id: "introductory-rites",
      title: {
        english: "The Introductory Rites",
        chinese: "进堂礼"
      },
      parts: [
        {
          title: "Entrance Procession",
          titleChinese: "进堂咏",
          content: []
        },
        {
          title: "Greeting",
          titleChinese: "致候词",
          content: [
            {
              speaker: "priest",
              english: "In the name of the Father, and of the Son, and of the Holy Spirit.",
              chinese: "因父，及子，及圣神之名。",
              pinyin: "yīn fù, jí zǐ, jí shèng shén zhī míng"
            },
            {
              speaker: "all",
              english: "Amen.",
              chinese: "阿们。",
              pinyin: "ā men"
            },
            {
              speaker: "priest",
              english: "The Lord be with you.",
              chinese: "愿主与你们同在。",
              pinyin: "yuàn zhǔ yǔ nǐ men tóng zài"
            },
            {
              speaker: "all",
              english: "And with your spirit.",
              chinese: "也与你的心灵同在。",
              pinyin: "yě yǔ nǐ de xīn líng tóng zài"
            }
          ]
        },
        {
          title: "Penitential Rite",
          titleChinese: "忏悔礼",
          content: [
            {
              speaker: "priest",
              english: "Brethren (brothers and sisters), let us acknowledge our sins, and so prepare ourselves to celebrate the sacred mysteries.",
              chinese: "各位兄弟姊妹：现在我们大家认罪，虔诚地举行圣祭。",
              pinyin: "gè wèi xiōng dì zǐ mèi: xiàn zài wǒ men dà jiā rèn zuì, qián chéng de jǔ xíng shèng jì"
            },
            {
              speaker: "all",
              english: "I confess to almighty God, and to you, my brothers and sisters, that I have greatly sinned, in my thoughts and in my words, in what I have done and in what I have failed to do,",
              chinese: "我向全能的天主和各位教友，承认我思、言、行为上的过失。",
              pinyin: "wǒ xiàng quán néng de tiān zhǔ hé gè wèi jiào yǒu, chéng rèn wǒ sī, yán, xíng wéi shàng de guò shī"
            },
            {
              speaker: "all",
              rubric: "[strike breast]",
              english: "through my fault, through my fault, through my most grievous fault;",
              chinese: "[搥胸] 我罪，我罪，我的重罪。",
              pinyin: "wǒ zuì, wǒ zuì, wǒ de zhòng zuì"
            },
            {
              speaker: "all",
              english: "therefore I ask blessed Mary, ever-virgin, all the angels and saints, and you, my brothers and sisters, to pray for me to the Lord, our God.",
              chinese: "为此，恳请终身童贞圣母玛利亚，天使、圣人，和你们各位教友，为我祈求上主，我们的天主。",
              pinyin: "wèi cǐ, kěn qǐng zhōng shēn tóng zhēn shèng mǔ mǎ lì yà, tiān shǐ, shèng rén, hé nǐ men gè wèi jiào yǒu, wèi wǒ qí qiú shàng zhǔ, wǒ men de tiān zhǔ"
            },
            {
              speaker: "priest",
              english: "May almighty God have mercy on us, forgive us our sins, and bring us to everlasting life.",
              chinese: "愿全能的天主垂怜我们，赦免我们的罪，使我们得到永生。",
              pinyin: "yuàn quán néng de tiān zhǔ chuí lián wǒ men, shè miǎn wǒ men de zuì, shǐ wǒ men dé dào yǒng shēng"
            },
            {
              speaker: "all",
              english: "Amen.",
              chinese: "阿们。",
              pinyin: "ā men"
            }
          ]
        },
        {
          title: "Kyrie Eleison",
          titleChinese: "垂怜经",
          content: [
            { speaker: "priest", english: "Lord, have mercy.", chinese: "上主，求祢垂怜。", pinyin: "shàng zhǔ, qiú nǐ chuí lián" },
            { speaker: "all", english: "Lord, have mercy.", chinese: "上主，求祢垂怜。", pinyin: "shàng zhǔ, qiú nǐ chuí lián" },
            { speaker: "priest", english: "Christ, have mercy.", chinese: "基督，求祢垂怜。", pinyin: "jī dū, qiú nǐ chuí lián" },
            { speaker: "all", english: "Christ, have mercy.", chinese: "基督，求祢垂怜。", pinyin: "jī dū, qiú nǐ chuí lián" },
            { speaker: "priest", english: "Lord, have mercy.", chinese: "上主，求祢垂怜。", pinyin: "shàng zhǔ, qiú nǐ chuí lián" },
            { speaker: "all", english: "Lord, have mercy.", chinese: "上主，求祢垂怜。", pinyin: "shàng zhǔ, qiú nǐ chuí lián" }
          ]
        },
        {
          title: "Gloria",
          titleChinese: "光荣颂",
          content: [
            { speaker: "all", english: "Glory to God in the highest, and on earth peace to people of good will.", chinese: "天主在天受光荣，主爱的人在世享平安。", pinyin: "tiān zhǔ zài tiān shòu guāng róng, zhǔ ài de rén zài shì xiǎng píng ān" },
            { speaker: "all", english: "We praise you, we bless you, we adore you, we glorify you, we give you thanks for your great glory, Lord God, heavenly King, O God, almighty Father.", chinese: "主，天主，天上的君王，全能的天主圣父，我们为了祢无上的光荣，赞美祢，称颂祢，朝拜祢，显扬祢，感谢祢。", pinyin: "zhǔ, tiān zhǔ, tiān shàng de jūn wáng, quán néng de tiān zhǔ shèng fù, wǒ men wèi le nǐ wú shàng de guāng róng, zàn měi nǐ, chēng sòng nǐ, cháo bài nǐ, xiǎn yáng nǐ, gǎn xiè nǐ" },
            { speaker: "all", english: "Lord Jesus Christ, only begotten Son, Lord God, Lamb of God, Son of the Father;", chinese: "主，耶稣基督，独生子；主，天主，天主的羔羊，圣父之子；", pinyin: "zhǔ, yē sū jī dū, dú shēng zǐ; zhǔ, tiān zhǔ, tiān zhǔ de gāo yáng, shèng fù zhī zǐ" },
            { speaker: "all", english: "you take away the sins of the world: have mercy on us; you take away the sins of the world, receive our prayer; you are seated at the right hand of the Father, have mercy on us.", chinese: "除免世罪者，求祢垂怜我们。除免世罪者，求祢俯听我们的祈祷。坐在圣父之右者，求祢垂怜我们；", pinyin: "chú miǎn shì zuì zhě, qiú nǐ chuí lián wǒ men. chú miǎn shì zuì zhě, qiú nǐ fǔ tīng wǒ men de qí dǎo. zuò zài shèng fù zhī yòu zhě, qiú nǐ chuí lián wǒ men" },
            { speaker: "all", english: "For you alone are the Holy One, you alone are the Lord, you alone are the Most High, Jesus Christ, with the Holy Spirit, in the glory of God the Father. Amen.", chinese: "因为只有祢是圣的，只有祢是主，只有祢是至高无上的。耶稣基督，祢和圣神，同享天主圣父的光荣。阿们。", pinyin: "yīn wéi zhǐ yǒu nǐ shì shèng de, zhǐ yǒu nǐ shì zhǔ, zhǐ yǒu nǐ shì zhì gāo wú shàng de. yē sū jī dū, nǐ hé shèng shén, tóng xiǎng tiān zhǔ shèng fù de guāng róng. ā men" }
          ]
        }
      ]
    },
    {
      id: "liturgy-of-the-word",
      title: { english: "The Liturgy of the Word", chinese: "圣道礼仪" },
      parts: [
        {
          title: "First Reading", titleChinese: "读经一",
          content: [
            { speaker: "lector", english: "The Word of the Lord.", chinese: "以上是天主的圣言。", pinyin: "yǐ shàng shì tiān zhǔ de shèng yán" },
            { speaker: "all", english: "Thanks be to God!", chinese: "感谢天主。", pinyin: "gǎn xiè tiān zhǔ" }
          ]
        },
        { title: "Responsorial Psalm", titleChinese: "答唱咏", content: [] },
        {
          title: "Second Reading", titleChinese: "读经二",
          content: [
            { speaker: "lector", english: "The Word of the Lord.", chinese: "以上是天主的圣言。", pinyin: "yǐ shàng shì tiān zhǔ de shèng yán" },
            { speaker: "all", english: "Thanks be to God!", chinese: "感谢天主。", pinyin: "gǎn xiè tiān zhǔ" }
          ]
        },
        { title: "Gospel Acclamation", titleChinese: "福音前欢呼", content: [] },
        {
          title: "Gospel", titleChinese: "福音",
          content: [
            { speaker: "priest", english: "The Lord be with you.", chinese: "愿主与你们同在。", pinyin: "yuàn zhǔ yǔ nǐ men tóng zài" },
            { speaker: "all", english: "And with your spirit.", chinese: "也与你的心灵同在。", pinyin: "yě yǔ nǐ de xīn líng tóng zài" },
            { speaker: "priest", english: "A reading from the Holy Gospel according to ___", chinese: "恭读圣○○福音", pinyin: "gōng dú shèng ○○ fú yīn" },
            { speaker: "all", english: "Glory to you, Lord!", chinese: "主，愿光荣归于祢。", pinyin: "zhǔ, yuàn guāng róng guī yú nǐ" },
            { speaker: "priest", english: "The Gospel of the Lord.", chinese: "以上是天主的圣言。", pinyin: "yǐ shàng shì tiān zhǔ de shèng yán" },
            { speaker: "all", english: "Praise to you, Lord Jesus Christ!", chinese: "基督，我们赞美祢。", pinyin: "jī dū, wǒ men zàn měi nǐ" }
          ]
        },
        { title: "Homily", titleChinese: "讲道", content: [] },
        {
          title: "Profession of Faith (Nicene Creed)", titleChinese: "信经",
          content: [
            { speaker: "all", english: "I believe in one God, the Father Almighty, maker of heaven and earth, of all things visible and invisible.", chinese: "我信唯一的天主，全能的圣父，天地万物，无论有形无形，都是祂所创造的。", pinyin: "wǒ xìn wéi yī de tiān zhǔ, quán néng de shèng fù, tiān dì wàn wù, wú lùn yǒu xíng wú xíng, dōu shì tā suǒ chuàng zào de" },
            { speaker: "all", english: "I believe in one Lord, Jesus Christ, the only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made.", chinese: "我信唯一的主、耶稣基督、天主的独生子。祂在万世之前，由圣父所生。祂是出自天主的天主，出自光明的光明，出自真天主的真天主。祂是圣父所生，而非圣父所造，与圣父同性同体，万物是藉着祂而造成的。", pinyin: "wǒ xìn wéi yī de zhǔ, yē sū jī dū, tiān zhǔ de dú shēng zǐ. tā zài wàn shì zhī qián, yóu shèng fù suǒ shēng. tā shì chū zì tiān zhǔ de tiān zhǔ, chū zì guāng míng de guāng míng, chū zì zhēn tiān zhǔ de zhēn tiān zhǔ. tā shì shèng fù suǒ shēng, ér fēi shèng fù suǒ zào, yǔ shèng fù tóng xìng tóng tǐ, wàn wù shì jiè zhe tā ér zào chéng de" },
            { speaker: "all", english: "For us men and for our salvation he came down from heaven,", chinese: "祂为了我们人类，并为了我们的得救，从天降下。", pinyin: "tā wèi le wǒ men rén lèi, bìng wèi le wǒ men de dé jiù, cóng tiān jiàng xià" },
            { speaker: "all", rubric: "[bow]", english: "and by the Holy Spirit was incarnate of the Virgin Mary, and became man.", chinese: "[鞠躬] 祂因圣神由童贞玛利亚取得肉躯，而成为人。", pinyin: "tā yīn shèng shén yóu tóng zhēn mǎ lì yà qǔ dé ròu qū, ér chéng wéi rén" },
            { speaker: "all", english: "For our sake he was crucified under Pontius Pilate, he suffered death and was buried, and rose again on the third day in accordance with the Scriptures.", chinese: "祂在般雀比拉多执政时，为我们被钉在十字架上，受难而被埋葬。祂正如圣经所载，第三日复活了，", pinyin: "tā zài bān què bǐ lā duō zhí zhèng shí, wèi wǒ men bèi dīng zài shí zì jià shàng, shòu nàn ér bèi mái zàng. tā zhèng rú shèng jīng suǒ zǎi, dì sān rì fù huó le" },
            { speaker: "all", english: "He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end.", chinese: "祂升了天，坐在圣父的右边。祂还要光荣地降来，审判生者死者，祂的神国万世无疆。", pinyin: "tā shēng le tiān, zuò zài shèng fù de yòu biān. tā hái yào guāng róng de jiàng lái, shěn pàn shēng zhě sǐ zhě, tā de shén guó wàn shì wú jiāng" },
            { speaker: "all", english: "I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the Prophets.", chinese: "我信圣神，祂是主及赋予生命者，由圣父圣子所共发。祂和圣父圣子，同受钦崇，同享光荣，祂曾藉先知们发言。", pinyin: "wǒ xìn shèng shén, tā shì zhǔ jí fù yǔ shēng mìng zhě, yóu shèng fù shèng zǐ suǒ gòng fā. tā hé shèng fù shèng zǐ, tóng shòu qīn chóng, tóng xiǎng guāng róng, tā céng jiè xiān zhī men fā yán" },
            { speaker: "all", english: "I believe in one, holy, catholic and apostolic Church. I confess one baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen.", chinese: "我信唯一、至圣、至公、从宗徒传下来的教会。我承认赦罪的圣洗，只有一个。我期待死人的复活，及来世的生命。阿们。", pinyin: "wǒ xìn wéi yī, zhì shèng, zhì gōng, cóng zōng tú chuán xià lái de jiào huì. wǒ chéng rèn shè zuì de shèng xǐ, zhǐ yǒu yī gè. wǒ qī dài sǐ rén de fù huó, jí lái shì de shēng mìng. ā men" }
          ]
        },
        {
          title: "Prayer of the Faithful", titleChinese: "信友祷词",
          content: [
            { speaker: "lector", english: "...let us pray to the Lord.", chinese: "为此意向，我们同声祈祷。", pinyin: "wèi cǐ yì xiàng, wǒ men tóng shēng qí dǎo" },
            { speaker: "all", english: "Lord, hear our prayer.", chinese: "求主俯听我们。", pinyin: "qiú zhǔ fǔ tīng wǒ men" }
          ]
        }
      ]
    },
    {
      id: "liturgy-of-the-eucharist",
      title: { english: "Liturgy of the Eucharist", chinese: "圣祭礼仪" },
      parts: [
        {
          title: "Preparation of the Gifts", titleChinese: "准备礼品",
          content: [
            { speaker: "priest", english: "Pray, brethren, that my sacrifice and yours may be acceptable to God, the almighty Father.", chinese: "各位教友，请你们祈祷。望全能的天主圣父，收纳我和你们共同奉献的圣祭。", pinyin: "gè wèi jiào yǒu, qǐng nǐ men qí dǎo. wàng quán néng de tiān zhǔ shèng fù, shōu nà wǒ hé nǐ men gòng tóng fèng xiàn de shèng jì" },
            { speaker: "all", english: "May the Lord accept the sacrifice at your hands, for the praise and glory of his name, for our good, and the good of all his holy Church.", chinese: "望上主从你的手中，收纳这个圣祭，为赞美并光荣祂的圣名，也为我们和祂整个圣教会的益处。", pinyin: "wàng shàng zhǔ cóng nǐ de shǒu zhōng, shōu nà zhè gè shèng jì, wèi zàn měi bìng guāng róng tā de shèng míng, yě wèi wǒ men hé tā zhěng gè shèng jiào huì de yì chù" }
          ]
        },
        {
          title: "Preface Dialogue", titleChinese: "颂谢词对话",
          content: [
            { speaker: "priest", english: "The Lord be with you.", chinese: "愿主与你们同在。", pinyin: "yuàn zhǔ yǔ nǐ men tóng zài" },
            { speaker: "all", english: "And with your spirit.", chinese: "也与你的心灵同在。", pinyin: "yě yǔ nǐ de xīn líng tóng zài" },
            { speaker: "priest", english: "Lift up your hearts.", chinese: "请举心向上。", pinyin: "qǐng jǔ xīn xiàng shàng" },
            { speaker: "all", english: "We lift them up to the Lord.", chinese: "我们全心归向上主。", pinyin: "wǒ men quán xīn guī xiàng shàng zhǔ" },
            { speaker: "priest", english: "Let us give thanks to the Lord, our God.", chinese: "请大家感谢主，我们的天主。", pinyin: "qǐng dà jiā gǎn xiè zhǔ, wǒ men de tiān zhǔ" },
            { speaker: "all", english: "It is right and just.", chinese: "这是理所当然的。", pinyin: "zhè shì lǐ suǒ dāng rán de" }
          ]
        },
        {
          title: "Holy, Holy, Holy (Sanctus)", titleChinese: "圣圣圣",
          content: [
            { speaker: "all", english: "Holy, holy, holy Lord, God of hosts, Heaven and earth are full of your glory. Hosanna in the highest. Blessed is he who comes in the name of the Lord. Hosanna in the highest.", chinese: "圣，圣，圣，上主，万有的主，祢的光荣充满天地。欢呼之声，响彻云霄。奉主名而来的，当受赞美。欢呼之声，响彻云霄。", pinyin: "shèng, shèng, shèng, shàng zhǔ, wàn yǒu de zhǔ, nǐ de guāng róng chōng mǎn tiān dì. huān hū zhī shēng, xiǎng chè yún xiāo. fèng zhǔ míng ér lái de, dāng shòu zàn měi. huān hū zhī shēng, xiǎng chè yún xiāo" }
          ]
        },
        {
          title: "Mystery of Faith", titleChinese: "信德的奥迹",
          content: [
            { speaker: "priest", english: "The mystery of faith.", chinese: "信德的奥迹。", pinyin: "xìn dé de ào jì" },
            { speaker: "all", english: "We proclaim your death, O Lord, and profess your Resurrection until you come again.", chinese: "基督，我们传报祢的圣死，我们歌颂祢的复活，我们期待祢光荣的来临。", pinyin: "jī dū, wǒ men chuán bào nǐ de shèng sǐ, wǒ men gē sòng nǐ de fù huó, wǒ men qī dài nǐ guāng róng de lái lín" }
          ]
        },
        {
          title: "Doxology and Great Amen", titleChinese: "圣三光荣颂",
          content: [
            { speaker: "priest", english: "Through him, with him, and in him, O God, almighty Father, in the unity of the Holy Spirit, all glory and honor is yours, for ever and ever.", chinese: "全能的天主圣父，一切崇敬和荣耀，借着基督，偕同基督，在基督内，并联合圣神，都归于祢，直到永远。", pinyin: "quán néng de tiān zhǔ shèng fù, yī qiè chóng jìng hé róng yào, jiè zhe jī dū, xié tóng jī dū, zài jī dū nèi, bìng lián hé shèng shén, dōu guī yú nǐ, zhí dào yǒng yuǎn" },
            { speaker: "all", english: "Amen!", chinese: "阿们！", pinyin: "ā men" }
          ]
        }
      ]
    },
    {
      id: "communion-rite",
      title: { english: "Communion Rite", chinese: "领圣体礼" },
      parts: [
        {
          title: "The Lord's Prayer", titleChinese: "天主经",
          content: [
            { speaker: "priest", english: "At the Savior's command and formed by divine teaching, we dare to say:", chinese: "我们既遵从救主的训示，又承受祂的教导，才敢说：", pinyin: "wǒ men jì zūn cóng jiù zhǔ de xùn shì, yòu chéng shòu tā de jiào dǎo, cái gǎn shuō" },
            { speaker: "all", english: "Our Father, who art in heaven, hallowed be thy Name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil.", chinese: "我们的天父，愿祢的名受显扬；愿祢的国来临；愿祢的旨意奉行在人间，如同在天上。求祢今天赏给我们日用的食粮；求祢宽恕我们的罪过，如同我们宽恕别人一样；不要让我们陷于诱惑，但救我们免于凶恶。", pinyin: "wǒ men de tiān fù, yuàn nǐ de míng shòu xiǎn yáng; yuàn nǐ de guó lái lín; yuàn nǐ de zhǐ yì fèng xíng zài rén jiān, rú tóng zài tiān shàng. qiú nǐ jīn tiān shǎng gěi wǒ men rì yòng de shí liáng; qiú nǐ kuān shù wǒ men de zuì guò, rú tóng wǒ men kuān shù bié rén yī yàng; bú yào ràng wǒ men xiàn yú yòu huò, dàn jiù wǒ men miǎn yú xiōng è" },
            { speaker: "all", english: "For the kingdom, the power, and the glory are yours, now and forever.", chinese: "天下万国，普世权威，一切荣耀，永归于祢。", pinyin: "tiān xià wàn guó, pǔ shì quán wēi, yī qiè róng yào, yǒng guī yú nǐ" }
          ]
        },
        {
          title: "Sign of Peace", titleChinese: "平安礼",
          content: [
            { speaker: "priest", english: "The Peace of the Lord be with you always.", chinese: "愿主的平安常与你们同在。", pinyin: "yuàn zhǔ de píng ān cháng yǔ nǐ men tóng zài" },
            { speaker: "all", english: "And with your spirit.", chinese: "也与你的心灵同在。", pinyin: "yě yǔ nǐ de xīn líng tóng zài" },
            { speaker: "priest", english: "Let us offer each other the sign of peace.", chinese: "请大家互祝平安。", pinyin: "qǐng dà jiā hù zhù píng ān" },
            { speaker: "all", english: "Peace be with you.", chinese: "祝你平安。", pinyin: "zhù nǐ píng ān" }
          ]
        },
        {
          title: "Lamb of God (Agnus Dei)", titleChinese: "羔羊颂",
          content: [
            { speaker: "all", english: "Lamb of God, you take away the sins of the world: have mercy on us. Lamb of God, you take away the sins of the world: have mercy on us. Lamb of God, you take away the sins of the world: grant us peace.", chinese: "除免世罪的天主羔羊，求祢垂怜我们。除免世罪的天主羔羊，求祢垂怜我们。除免世罪的天主羔羊，求祢赐给我们平安。", pinyin: "chú miǎn shì zuì de tiān zhǔ gāo yáng, qiú nǐ chuí lián wǒ men. chú miǎn shì zuì de tiān zhǔ gāo yáng, qiú nǐ chuí lián wǒ men. chú miǎn shì zuì de tiān zhǔ gāo yáng, qiú nǐ cì gěi wǒ men píng ān" }
          ]
        },
        {
          title: "Invitation to Communion", titleChinese: "领圣体",
          content: [
            { speaker: "priest", english: "Behold the Lamb of God, behold him who takes away the sins of the world. Blessed are those called to the supper of the lamb.", chinese: "请看，天主的羔羊；请看，除免世罪者。蒙召来赴圣宴的人，是有福的。", pinyin: "qǐng kàn, tiān zhǔ de gāo yáng; qǐng kàn, chú miǎn shì zuì zhě. méng zhào lái fù shèng yàn de rén, shì yǒu fú de" },
            { speaker: "all", english: "Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed.", chinese: "主，我当不起祢到我心里来，只要祢说一句话，我的灵魂就会痊愈。", pinyin: "zhǔ, wǒ dāng bù qǐ nǐ dào wǒ xīn lǐ lái, zhǐ yào nǐ shuō yī jù huà, wǒ de líng hún jiù huì quán yù" },
            { speaker: "priest", english: "The body of Christ.", chinese: "基督圣体。", pinyin: "jī dū shèng tǐ" },
            { speaker: "all", english: "Amen.", chinese: "阿们。", pinyin: "ā men" },
            { speaker: "priest", english: "The blood of Christ.", chinese: "基督圣血。", pinyin: "jī dū shèng xuè" },
            { speaker: "all", english: "Amen.", chinese: "阿们。", pinyin: "ā men" }
          ]
        }
      ]
    },
    {
      id: "concluding-rite",
      title: { english: "Concluding Rite", chinese: "礼成式" },
      parts: [
        {
          title: "Final Blessing", titleChinese: "祝福",
          content: [
            { speaker: "priest", english: "The Lord be with you.", chinese: "愿主与你们同在。", pinyin: "yuàn zhǔ yǔ nǐ men tóng zài" },
            { speaker: "all", english: "And with your spirit.", chinese: "也与你的心灵同在。", pinyin: "yě yǔ nǐ de xīn líng tóng zài" },
            { speaker: "priest", english: "May almighty God bless you, the Father, and the Son, and the Holy Spirit.", chinese: "愿全能的天主，圣父，圣子，圣神，降福你们。", pinyin: "yuàn quán néng de tiān zhǔ, shèng fù, shèng zǐ, shèng shén, jiàng fú nǐ men" },
            { speaker: "all", english: "Amen.", chinese: "阿们。", pinyin: "ā men" }
          ]
        },
        {
          title: "Dismissal", titleChinese: "遣散",
          content: [
            { speaker: "priest", english: "Go forth, the Mass is ended.", chinese: "弥撒礼成。", pinyin: "mí sā lǐ chéng" },
            { speaker: "all", english: "Thanks be to God!", chinese: "感谢天主。", pinyin: "gǎn xiè tiān zhǔ" }
          ]
        }
      ]
    }
  ]
};
