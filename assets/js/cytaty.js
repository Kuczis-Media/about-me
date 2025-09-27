const quotes = [
  {
    translations: {
      pl: `Pośpiech jest złym doradcą, ale często jedynym.`,
      en: `Haste is a bad adviser, but often the only one.`,
      de: `Eile ist ein schlechter Ratgeber, aber oft der einzige.`,
      ru: `Спешка — плохой советчик, но часто единственный.`
    }
  },
  {
    translations: {
      pl: `Nie wierz we wszystko, co myślisz.`,
      en: `Don't believe everything you think.`,
      de: `Glaube nicht alles, was du denkst.`,
      ru: `Не верь всему, что думаешь.`
    }
  },
  {
    translations: {
      pl: `Życie nabiera sensu dopiero w wyobraźni.`,
      en: `Life gains meaning only in the imagination.`,
      de: `Das Leben bekommt erst in der Vorstellung Sinn.`,
      ru: `Жизнь обретает смысл только в воображении.`
    }
  },
  {
    translations: {
      pl: `Mężczyzna jest na wpół zakochany w każdej kobiecie, która słucha, gdy on mówi.`,
      en: `A man is half in love with every woman who listens when he speaks.`,
      de: `Ein Mann verliebt sich zur Hälfte in jede Frau, die ihm zuhört, wenn er spricht.`,
      ru: `Мужчина наполовину влюбляется в каждую женщину, которая слушает, когда он говорит.`
    }
  },
  {
    translations: {
      pl: `Nie pragnij wiedzieć wszystkiego, bo we wszystkim będziesz nieukiem.`,
      en: `Do not crave to know everything, or you'll be ignorant of everything.`,
      de: `Sei nicht begierig, alles zu wissen, sonst wirst du in allem ein Ignorant bleiben.`,
      ru: `Не стремись знать всё, иначе во всём останешься невеждой.`
    }
  },
  {
    translations: {
      pl: `Oczekiwanie przyjemności to też przyjemność. Czasem większa, niż wydarzenie samo w sobie.`,
      en: `The anticipation of pleasure is also pleasure—sometimes greater than the event itself.`,
      de: `Das Erwarten einer Freude ist ebenfalls eine Freude, manchmal größer als das Ereignis selbst.`,
      ru: `Ожидание удовольствия тоже удовольствие, порой большее, чем само событие.`
    }
  },
  {
    translations: {
      pl: `W życiu jak w regule — wszyscy liczą na wyjątki.`,
      en: `In life, as in rules, everyone counts on the exceptions.`,
      de: `Im Leben wie in jeder Regel rechnen alle mit den Ausnahmen.`,
      ru: `В жизни, как и в правилах, все рассчитывают на исключения.`
    }
  },
  {
    translations: {
      pl: `Większą przyjemność sprawia odkrywanie prawdy niż posiadanie wiedzy.`,
      en: `Discovering the truth is more pleasurable than merely having knowledge.`,
      de: `Es bereitet mehr Freude, die Wahrheit zu entdecken, als Wissen einfach zu besitzen.`,
      ru: `Больше удовольствия приносит открытие истины, чем просто обладание знанием.`
    }
  },
  {
    translations: {
      pl: `Być wolnym to móc nie kłamać.`,
      en: `To be free is to be able not to lie.`,
      de: `Frei zu sein heißt, nicht lügen zu müssen.`,
      ru: `Быть свободным — значит иметь возможность не лгать.`
    }
  },
  {
    translations: {
      pl: `Nawet, gdy wszyscy wokół przyznają ci rację, to jeszcze nie znaczy, że jesteś nieomylny.`,
      en: `Even if everyone around agrees with you, it still doesn't mean you're infallible.`,
      de: `Selbst wenn alle um dich herum dir zustimmen, heißt das noch lange nicht, dass du unfehlbar bist.`,
      ru: `Даже если все вокруг соглашаются с тобой, это ещё не значит, что ты непогрешим.`
    }
  },
  {
    translations: {
      pl: `Najstraszniejsi są ludzie, którzy wiedzą wszystko i są o tym przekonani.`,
      en: `The scariest people are those who know everything and are sure of it.`,
      de: `Am furchteinflößendsten sind die Menschen, die alles zu wissen glauben.`,
      ru: `Самые страшные люди — те, кто уверен, что знает всё.`
    }
  },
  {
    translations: {
      pl: `Wiedza nie opiera się tylko na prawdzie; także na błędach.`,
      en: `Knowledge rests not only on truth but also on mistakes.`,
      de: `Wissen stützt sich nicht nur auf Wahrheit, sondern auch auf Irrtümer.`,
      ru: `Знание основано не только на истине, но и на ошибках.`
    }
  },
  {
    translations: {
      pl: `Poeta to człowiek, który ma zbyt małą wyobraźnię, by zostać matematykiem.`,
      en: `A poet is someone whose imagination is too small to become a mathematician.`,
      de: `Ein Dichter ist ein Mensch mit zu wenig Fantasie, um Mathematiker zu werden.`,
      ru: `Поэт — это человек, у которого слишком мало воображения, чтобы стать математиком.`
    }
  },
  {
    translations: {
      pl: `Posiadanie prawa do krytyki nie oznacza, że ma się więcej rozumu niż krytykowany.`,
      en: `Having the right to criticize doesn't mean you have more sense than the one criticized.`,
      de: `Das Recht zu kritisieren heißt nicht, mehr Verstand zu haben als der Kritisierte.`,
      ru: `Право критиковать ещё не означает, что у тебя больше ума, чем у критикуемого.`
    }
  },
  {
    translations: {
      pl: `Czasem trzeba zmienić wszystko, aby znowu było tak jak dawniej.`,
      en: `Sometimes you must change everything so that it can be as it once was.`,
      de: `Manchmal muss man alles verändern, damit es wieder so wird wie früher.`,
      ru: `Иногда нужно изменить всё, чтобы снова стало как раньше.`
    }
  },
  {
    translations: {
      pl: `Człowiek staje się ateistą, gdy poczuje się lepszy od Boga.`,
      en: `A person becomes an atheist when they start feeling superior to God.`,
      de: `Der Mensch wird zum Atheisten, wenn er sich besser fühlt als Gott.`,
      ru: `Человек становится атеистом, когда чувствует себя лучше Бога.`
    }
  },
  {
    translations: {
      pl: `Im jest gorzej, tym większa szansa na to, aby było lepiej.`,
      en: `The worse it gets, the greater the chance it will get better.`,
      de: `Je schlimmer es ist, desto größer die Chance, dass es besser wird.`,
      ru: `Чем хуже дела, тем больше шанс, что станет лучше.`
    }
  },
  {
    translations: {
      pl: `Niektórym do sławy brakuje jedynie uchwały.`,
      en: `Some people lack only a formal resolution to achieve fame.`,
      de: `Manchen fehlt zum Ruhm nur noch ein formeller Beschluss.`,
      ru: `Некоторым до славы не хватает лишь официального постановления.`
    }
  },
  {
    translations: {
      pl: `Strasznie patrzeć niebezpieczeństwu w oczy. Szczególnie, gdy są piękne.`,
      en: `It's terrifying to look danger in the eyes, especially when they're beautiful.`,
      de: `Es ist furchtbar, der Gefahr in die Augen zu sehen – besonders wenn sie schön sind.`,
      ru: `Страшно смотреть опасности в глаза, особенно когда они прекрасны.`
    }
  },
  {
    translations: {
      pl: `Klasę restauracji rozpoznaje się po arogancji kelnerów.`,
      en: `You can judge a restaurant's class by the arrogance of its waiters.`,
      de: `Die Klasse eines Restaurants erkennt man an der Arroganz der Kellner.`,
      ru: `Класс ресторана узнаётся по высокомерию официантов.`
    }
  },
  {
    translations: {
      pl: `Kobieta powinna wiedzieć, jak dalece może iść za daleko.`,
      en: `A woman should know how far she can go too far.`,
      de: `Eine Frau sollte wissen, wie weit sie zu weit gehen kann.`,
      ru: `Женщина должна знать, насколько далеко она может зайти, заходя слишком далеко.`
    }
  },
  {
    translations: {
      pl: `Pierwszym warunkiem nieśmiertelności jest najpierw umrzeć.`,
      en: `The first condition of immortality is to die first.`,
      de: `Die erste Voraussetzung für Unsterblichkeit ist, zunächst zu sterben.`,
      ru: `Первое условие бессмертия — сперва умереть.`
    }
  },
  {
    translations: {
      pl: `Bardzo wątpię, że żonaci mężczyźni żyją dłużej. Jednakże nie wątpię, iż może się im tak wydawać.`,
      en: `I greatly doubt that married men live longer. Yet I don't doubt they may feel as if they do.`,
      de: `Ich bezweifle sehr, dass verheiratete Männer länger leben. Ich bezweifle jedoch nicht, dass es ihnen so vorkommt.`,
      ru: `Я сильно сомневаюсь, что женатые мужчины живут дольше. Но не сомневаюсь, что им так может казаться.`
    }
  },
  {
    translations: {
      pl: `Jeśli mężczyzna często robi to sobie sam, to wcale nie oznacza, że jest samodzielny.`,
      en: `If a man often does it himself, it doesn't mean he's independent.`,
      de: `Wenn ein Mann es sich oft selbst macht, heißt das noch lange nicht, dass er selbstständig ist.`,
      ru: `Если мужчина часто делает это сам, это вовсе не значит, что он самостоятельный.`
    }
  },
  {
    translations: {
      pl: `Gdyby mężczyźni mieli okres, to byłyby to dni wolne od pracy.`,
      en: `If men had periods, those would be days off work.`,
      de: `Hätten Männer ihre Periode, wären das arbeitsfreie Tage.`,
      ru: `Если бы у мужчин были месячные, это были бы выходные.`
    }
  },
  {
    translations: {
      pl: `Do piekła idą ludzie, którzy swoje niebo mieli już na ziemi.`,
      en: `Those who already had their heaven on earth go to hell.`,
      de: `In die Hölle gehen die Menschen, die ihr Paradies schon auf Erden hatten.`,
      ru: `В ад идут те, у кого рай уже был на земле.`
    }
  },
  {
    translations: {
      pl: `Nie przejmuj się tym, że mogą cię zwolnić. Nowa praca zazwyczaj okazuje się krokiem naprzód.`,
      en: `Don't worry about being fired; a new job usually turns out to be a step forward.`,
      de: `Sorge dich nicht darum, dass man dich entlassen könnte. Ein neuer Job erweist sich meist als Schritt nach vorn.`,
      ru: `Не переживай, что тебя могут уволить; новая работа обычно оказывается шагом вперёд.`
    }
  },
  {
    translations: {
      pl: `Jest śmierć i podatki, ale podatki są gorsze, bo śmierć przynajmniej nie trafia się co roku.`,
      en: `There is death and there are taxes, but taxes are worse, because death at least doesn't come every year.`,
      de: `Es gibt den Tod und die Steuern, aber die Steuern sind schlimmer, denn der Tod kommt wenigstens nicht jedes Jahr.`,
      ru: `Есть смерть и налоги, но налоги хуже: смерть случается хотя бы не каждый год.`
    }
  },
  {
    translations: {
      pl: `Rosjanie długo zaprzęgają, ale jadą szybko.`,
      en: `Russians harness slowly, but they drive fast.`,
      de: `Die Russen spannen lange an, aber sie fahren schnell.`,
      ru: `Русские долго запрягают, но быстро едут.`
    }
  },
  {
    translations: {
      pl: `Co tracisz, zyskując sławę? Czas. Wszystko inne pozostaje takie samo.`,
      en: `What do you lose by gaining fame? Time. Everything else stays the same.`,
      de: `Was verlierst du, wenn du Ruhm erlangst? Zeit. Alles andere bleibt gleich.`,
      ru: `Что ты теряешь, обретая славу? Время. Всё остальное остаётся прежним.`
    }
  },
  {
    translations: {
      pl: `W małżeństwie przymknęła oko tylko raz. Gdy do niego strzelała.`,
      en: `In their marriage she turned a blind eye only once—when she was shooting at him.`,
      de: `In der Ehe drückte sie nur einmal ein Auge zu – als sie auf ihn schoss.`,
      ru: `В браке она закрыла глаза лишь однажды — когда стреляла в него.`
    }
  },
  {
    translations: {
      pl: `Nie ma innego sposobu, żeby rozstać się z jakimś bólem, jak go wyrazić.`,
      en: `There's no other way to part with a pain than to express it.`,
      de: `Es gibt keinen anderen Weg, sich von einem Schmerz zu trennen, als ihn auszusprechen.`,
      ru: `Нет иного способа избавиться от боли, кроме как выразить её.`
    }
  },
  {
    translations: {
      pl: `Pisać trzeba tak, aby zechciało cię przeczytać jak najwięcej starych bibliotekarek.`,
      en: `You should write so that as many elderly librarians as possible will want to read you.`,
      de: `Man muss so schreiben, dass möglichst viele alte Bibliothekarinnen einen lesen wollen.`,
      ru: `Писать нужно так, чтобы как можно больше старых библиотекарш захотели тебя прочитать.`
    }
  },
  {
    translations: {
      pl: `Napad na bank to akcja dyletantów. Profesjonaliści bank po prostu zakładają.`,
      en: `A bank robbery is amateur work; professionals simply start a bank.`,
      de: `Ein Banküberfall ist das Werk von Dilettanten. Profis gründen einfach eine Bank.`,
      ru: `Ограбление банка — дело дилетантов. Профессионалы просто открывают банк.`
    }
  },
  {
    translations: {
      pl: `Najlepszym zapachem mężczyzny jest jego sukces.`,
      en: `The best scent a man can wear is his success.`,
      de: `Der beste Duft eines Mannes ist sein Erfolg.`,
      ru: `Лучший аромат мужчины — его успех.`
    }
  },
  {
    translations: {
      pl: `Są rzeczy, do których należy podchodzić boso, na palcach, krok po kroku i nie za blisko.`,
      en: `Some things must be approached barefoot, on tiptoe, step by step, and not too close.`,
      de: `Es gibt Dinge, denen man barfuß, auf Zehenspitzen, Schritt für Schritt und nicht zu nah begegnen sollte.`,
      ru: `Есть вещи, к которым нужно подходить босиком, на цыпочках, шаг за шагом и не слишком близко.`
    }
  },
  {
    translations: {
      pl: `Narodowość jest intymna. Obywatelstwo i paszport nie.`,
      en: `Nationality is intimate; citizenship and a passport are not.`,
      de: `Die Nationalität ist etwas Intimes; Staatsbürgerschaft und Pass sind es nicht.`,
      ru: `Национальность — это интимно. Гражданство и паспорт — нет.`
    }
  },
  {
    translations: {
      pl: `Żyj tak, aby kiedyś logo Google'a było o tobie.`,
      en: `Live so that one day Google's logo is about you.`,
      de: `Lebe so, dass eines Tages das Google-Logo dir gewidmet ist.`,
      ru: `Живи так, чтобы однажды логотип Google был посвящён тебе.`
    }
  },
  {
    translations: {
      pl: `Są mężczyźni do pracy w ogrodzie i są mężczyźni do posiadania ogrodu.`,
      en: `There are men for working in the garden and men for owning the garden.`,
      de: `Es gibt Männer, die im Garten arbeiten, und Männer, die einen Garten besitzen.`,
      ru: `Есть мужчины для работы в саду, а есть мужчины для владения садом.`
    }
  },
  {
    translations: {
      pl: `Gangreny nie można wyleczyć pudrem.`,
      en: `You can't cure gangrene with powder.`,
      de: `Eine Gangrän lässt sich nicht mit Puder heilen.`,
      ru: `Гангрену нельзя вылечить пудрой.`
    }
  },
  {
    translations: {
      pl: `Jeśli ktoś nie popełnia samobójstwa, nie oznacza to, że wybrał życie. On tylko nie potrafił dobrze się zabić.`,
      en: `If someone doesn't commit suicide, it doesn't mean they chose life—they just failed to kill themselves properly.`,
      de: `Wenn jemand keinen Selbstmord begeht, heißt das nicht, dass er das Leben gewählt hat; er konnte sich nur nicht richtig umbringen.`,
      ru: `То, что человек не совершил самоубийство, ещё не значит, что он выбрал жизнь — он просто не сумел как следует убить себя.`
    }
  },
  {
    translations: {
      pl: `Pijąc alkohol, trzeba znać swoją miarę. Bo można wypić za mało.`,
      en: `When drinking alcohol you need to know your measure, because you might drink too little.`,
      de: `Beim Alkoholtrinken muss man sein Maß kennen, denn man kann auch zu wenig trinken.`,
      ru: `Пьянствуя, нужно знать свою меру — можно ведь выпить слишком мало.`
    }
  },
  {
    translations: {
      pl: `Wielu mężczyzn zakochuje się we wgłębieniu na policzku, ale potem żeni się z całą dziewczyną.`,
      en: `Many men fall in love with a dimple on a cheek, but then they marry the whole girl.`,
      de: `Viele Männer verlieben sich in ein Grübchen auf der Wange, aber heiraten dann das ganze Mädchen.`,
      ru: `Многие мужчины влюбляются в ямочку на щеке, но женятся на всей девушке.`
    }
  },
  {
    translations: {
      pl: `Nieważne jest kto i jak głosuje. Ważne, kto liczy głosy. (J. Stalin)`,
      en: `It doesn't matter who votes or how; what matters is who counts the votes. (J. Stalin)`,
      de: `Es ist egal, wer und wie wählt. Wichtig ist, wer die Stimmen zählt. (J. Stalin)`,
      ru: `Не важно, кто и как голосует. Важно, кто считает голоса. (И. Сталин)`
    }
  },
  {
    translations: {
      pl: `Życie jest umiarkowanie dobrą sztuką z kiepsko napisanym trzecim aktem.`,
      en: `Life is a moderately good play with a poorly written third act.`,
      de: `Das Leben ist ein mittelmäßiges Stück mit einem schlecht geschriebenen dritten Akt.`,
      ru: `Жизнь — умеренно хорошая пьеса с плохо написанным третьим актом.`
    }
  },
  {
    translations: {
      pl: `Szczupłość w 1913 roku była uważana za tragiczne zrządzenie losu.`,
      en: `In 1913 thinness was considered a tragic twist of fate.`,
      de: `1913 galt Schlankheit als tragisches Schicksal.`,
      ru: `В 1913 году худоба считалась трагическим роком.`
    }
  },
  {
    translations: {
      pl: `Miłość jest doświadczeniem większej podatności na zranienie.`,
      en: `Love is the experience of greater vulnerability to being hurt.`,
      de: `Liebe bedeutet, verletzbarer zu sein.`,
      ru: `Любовь — это опыт большей уязвимости.`
    }
  },
  {
    translations: {
      pl: `Źródłem przyjaźni jest zdumienie, iż istnieje człowiek, który widzi sprawy tak samo jak my.`,
      en: `The source of friendship is the amazement that there is someone who sees things the way we do.`,
      de: `Die Quelle der Freundschaft ist die Verwunderung darüber, dass es jemanden gibt, der die Dinge so sieht wie wir.`,
      ru: `Источником дружбы становится удивление от того, что есть человек, который видит вещи так же, как мы.`
    }
  },
  {
    translations: {
      pl: `Cokolwiek robią kobiety, muszą robić to dwa razy lepiej niż mężczyźni, by zostało to ocenione choć w połowie tak samo dobrze.`,
      en: `Whatever women do, they must do it twice as well as men to be judged even half as good.`,
      de: `Was Frauen auch tun, sie müssen es doppelt so gut machen wie Männer, um nur halb so gut bewertet zu werden.`,
      ru: `Что бы ни делали женщины, им приходится делать это вдвое лучше мужчин, чтобы их оценили хотя бы наполовину так же.`
    }
  },
  {
    translations: {
      pl: `Żeby się zespolić, musisz się najpierw zachwycić, potem się zapomnieć, a na końcu, gdy już nie pożądasz, chcieć trwać w mozolnym celibacie tylko jednego ciała.`,
      en: `To become one, you must first be enchanted, then lose yourself, and finally, when desire fades, choose to persist in the laborious celibacy of a single body.`,
      de: `Um sich zu vereinen, musst du dich zuerst begeistern, dann dich verlieren und schließlich, wenn du nicht mehr begehst, im mühevollen Zölibat eines einzigen Körpers verharren wollen.`,
      ru: `Чтобы слиться, нужно сначала восхититься, потом забыться, а в конце, когда уже не желаешь, захотеть пребывать в трудном целибате одного-единственного тела.`
    }
  },
  {
    translations: {
      pl: `Zachowanie wiedzy tylko dla siebie jest objawem pychy.`,
      en: `Keeping knowledge only for yourself is a sign of pride.`,
      de: `Wissen nur für sich zu behalten ist ein Zeichen von Hochmut.`,
      ru: `Оставлять знания только себе — проявление гордыни.`
    }
  },
  {
    translations: {
      pl: `Płomienie co noc mają tylko strażacy.`,
      en: `Firefighters are the only ones who have flames every night.`,
      de: `Nur Feuerwehrleute haben jede Nacht Flammen.`,
      ru: `Пламя каждую ночь бывает только у пожарных.`
    }
  },
  {
    translations: {
      pl: `Zdrada zaczyna się wówczas, gdy zamiast żonie coś ważnego, jako pierwszej osobie, pragnie się natychmiast opowiedzieć innej kobiecie.`,
      en: `Betrayal begins when, instead of telling your wife something important first, you long to tell another woman.`,
      de: `Untreue beginnt, wenn man etwas Wichtiges nicht zuerst der eigenen Frau erzählen will, sondern sofort einer anderen.`,
      ru: `Измена начинается тогда, когда, вместо того чтобы прежде всего рассказать что-то важное жене, хочется немедленно поделиться с другой женщиной.`
    }
  },
  {
    translations: {
      pl: `Przy prawdziwym równouprawnieniu kobiety, nie zaniedbując niczego, mogłyby mieć dla swoich mężczyzn dwa razy więcej czasu.`,
      en: `With true equality, women, neglecting nothing, could have twice as much time for their men.`,
      de: `Bei wirklicher Gleichberechtigung könnten Frauen, ohne etwas zu vernachlässigen, doppelt so viel Zeit für ihre Männer finden.`,
      ru: `При настоящем равноправии женщины, не упуская ничего, могли бы уделять своим мужчинам вдвое больше времени.`
    }
  },
  {
    translations: {
      pl: `Kobiety narzekają, że mężczyźni myślą tylko o jednym, a kiedy oni przestają o tym myśleć, to one czują się urażone.`,
      en: `Women complain that men think only about one thing, and when they stop thinking about it, the women feel offended.`,
      de: `Frauen beklagen, dass Männer nur an eines denken – und wenn sie damit aufhören, fühlen sich die Frauen verletzt.`,
      ru: `Женщины жалуются, что мужчины думают только об одном, а когда они перестают об этом думать, женщины обижаются.`
    }
  },
  {
    translations: {
      pl: `Czasami śmierć marzenia jest nie mniej smutna niż prawdziwa śmierć.`,
      en: `Sometimes the death of a dream is no less sorrowful than an actual death.`,
      de: `Manchmal ist der Tod eines Traums nicht weniger traurig als der wirkliche Tod.`,
      ru: `Иногда смерть мечты не менее печальна, чем настоящая смерть.`
    }
  },
  {
    translations: {
      pl: `W Boga trzeba wierzyć, ale Bogu niekoniecznie.`,
      en: `You must believe in God, but not necessarily believe God.`,
      de: `An Gott muss man glauben, aber Gott muss man nicht unbedingt glauben.`,
      ru: `В Бога верить нужно, но Богу верить необязательно.`
    }
  },
  {
    translations: {
      pl: `Kobiety pragną seksu z mężczyzną, którego kochają. Mężczyźni natomiast chcą po prostu seksu.`,
      en: `Women desire sex with the man they love; men simply want sex.`,
      de: `Frauen sehnen sich nach Sex mit dem Mann, den sie lieben; Männer wollen einfach nur Sex.`,
      ru: `Женщины хотят секса с мужчиной, которого любят; мужчины же просто хотят секса.`
    }
  },
  {
    translations: {
      pl: `Gdyby wybory zmieniały cokolwiek, to politycy dawno by je zdelegalizowali.`,
      en: `If elections changed anything, politicians would have banned them long ago.`,
      de: `Würden Wahlen etwas verändern, hätten die Politiker sie längst verboten.`,
      ru: `Если бы выборы что-то меняли, политики давно бы их запретили.`
    }
  },
  {
    translations: {
      pl: `Na podstawie własnej biografii można stworzyć nieskończoną liczbę historii. Niekoniecznie prawdziwych.`,
      en: `From your own biography you can create an endless number of stories—not necessarily true ones.`,
      de: `Aus der eigenen Biografie lässt sich eine unendliche Zahl von Geschichten machen – nicht zwingend wahr.`,
      ru: `На основе собственной биографии можно придумать бесконечное количество историй — необязательно правдивых.`
    }
  }
];

const languages = [
  { key: 'pl', label: 'Polski' },
  { key: 'en', label: 'Angielski' },
  { key: 'de', label: 'Niemiecki' },
  { key: 'ru', label: 'Rosyjski' }
];

function pickRandomQuote() {
  if (!quotes.length) {
    return null;
  }
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function renderQuote() {
  const quoteContainer = document.getElementById('quoteContainer');
  const translationsContainer = document.getElementById('quoteTranslations');

  if (!quoteContainer || !translationsContainer) {
    return;
  }

  const selection = pickRandomQuote();
  if (!selection) {
    quoteContainer.textContent = '';
    translationsContainer.innerHTML = '';
    return;
  }

  quoteContainer.textContent = selection.translations.pl || '';
  translationsContainer.innerHTML = '';

  languages.forEach(({ key, label }) => {
    const wrapper = document.createElement('p');
    wrapper.className = 'quote-translation';

    const labelEl = document.createElement('span');
    labelEl.className = 'quote-translation__label';
    labelEl.textContent = `${label}:`;

    const textEl = document.createElement('span');
    textEl.className = 'quote-translation__text';
    textEl.textContent = selection.translations[key] || '';

    wrapper.append(labelEl, ' ', textEl);
    translationsContainer.appendChild(wrapper);
  });
}

document.addEventListener('DOMContentLoaded', renderQuote);
