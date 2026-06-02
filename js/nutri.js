/* ==========================================================================
   [[ CONTROLE DE DADOS NUTRICIONAIS DINÂMICOS - DISTRIBUIDORA VITÓRIA ]]
   ========================================================================== */

//1. banco de Dados Local das Frutas

const dadosFrutas = {
    "morango": {
        titulo: "MORANGO",
        imagem: "./assets/nutri-morango.png",
        beneficios: [
            { icone: "🌱", texto: "<strong>Vitamina C:</strong>Poderoso antioxidante que fortalece a imunidade e estimula o colágeno." },
            { icone: "💧", texto: "<strong>Potássio:</strong> Essencial para o equilíbrio hídrico e controle da pressão arterial." },
            { icone: "🍓", texto: "<strong>Energia Sustentada:</strong> Carboidratos de absorção lenta que evitam picos repentinos de glicose." },
            { icone: "⚡", texto: "<strong>Antioxidante Natural:</strong> Rico em antocianinas, que protegem o sistema cardiovascular." },
            { icone: "❤️", texto: "<strong>Fibras Solúveis:</strong> Auxiliam diretamente na saúde digestiva e no controle do colesterol." }

        ]
    },
    "laranja": {
        titulo: "LARANJA",
        imagem: "./assets/nutri-laranja.png",
        beneficios: [
            { icone: "🍊", texto: "<strong>Vitamina C:</strong> Poderoso suporte imunitário que potencializa a absorção de ferro no organismo." },
            { icone: "👁️", texto: "<strong>Vitamina A:</strong> Rica em beta-caroteno, essencial para a saúde ocular e renovação celular." },
            { icone: "🍊", texto: "<strong>Flavonoides:</strong> Contém hesperidina, que melhora a circulação e protege o sistema cardíaco." },
            { icone: "🍋", texto: "<strong>Ácido Cítrico:</strong> Propriedades naturais que auxiliam na digestão e na prevenção de cálculos renais." },
            { icone: "🌾", texto: "<strong>Fibras / Pectina:</strong> Fibras solúveis que controlam os níveis de açúcar no sangue e a saúde do intestino." }


        ]

    },
    "açaí": {
        titulo: "AÇAÍ",
        imagem: "./assets/nutri-acai.png",
        beneficios: [
            { icone: "🛡️", texto: "<strong>Antocianinas:</strong> Altíssimo poder antioxidante que combate o envelhecimento celular e protege o coração." },
            { icone: "💪", texto: "<strong>Energia e Vitalidade:</strong> Rico em gorduras saudáveis que fornecem combustível de longa duração para o corpo." },
            { icone: "🧠", texto: "<strong>Saúde Cerebral:</strong> Os polifenóis ajudam a melhorar a memória e protegem o sistema nervoso central." },
            { icone: "🦴", texto: "<strong>Cálcio e Magnésio:</strong> Minerais essenciais que atuam diretamente no fortalecimento de ossos e dentes." },
            { icone: "💥", texto: "<strong>Vitamina E:</strong> Excelente ação regeneradora que melhora a saúde da pele e fortalece o sistema imune." }

        ]
    },
    "acerola": {
        titulo: "ACEROLA",
        imagem: "./assets/nutri-acerola.png",
        beneficios: [

            { icone: "🚀", texto: "<strong>Super Vitamina C:</strong> Possui até 30 vezes mais Vitamina C que a laranja, blindando a imunidade com potência máxima." },
            { icone: "🩸", texto: "<strong>Absorção de Ferro:</strong> O alto teor de ácido ascórbico otimiza a captação de ferro dos alimentos, combatendo a anemia." },
            { icone: "✨", texto: "<strong>Estímulo de Colágeno:</strong> Essencial para a síntese de colágeno, promovendo a firmeza da pele e a saúde das articulações." },
            { icone: "👁️", texto: "<strong>Vitamina A / Carotenoides:</strong> Rica em pigmentos naturais que protegem a visão e aceleram a renovação dos tecidos." },
            { icone: "🥊", texto: "<strong>Ação Anti-inflamatória:</strong> Seus flavonoides reduzem o estresse oxidativo, protegendo as células contra inflamações crônicas." }
        ]
    },
    "goiaba": {
        titulo: "GOIABA",
        imagem: "./assets/nutri-goiaba.png",
        beneficios: [
            { icone: "⚙️", texto: "<strong>Fibras e Digestão:</strong> Altíssimo teor de fibras insolúveis que regulam o trânsito intestinal e promovem saciedade." },
            { icone: "🫀", texto: "<strong>Licopeno:</strong> Antioxidante poderoso que impede a oxidação do colesterol ruim (LDL), protegendo as artérias." },
            { icone: "🧂", texto: "<strong>Controle da Pressão:</strong> Rica em potássio, que ajuda a neutralizar os efeitos do sódio e estabiliza a pressão arterial." },
            { icone: "🍬", texto: "<strong>Baixo Índice Glicêmico:</strong> Evita picos de insulina no sangue, sendo uma excelente aliada para o controle do diabetes." },
            { icone: "🔋", texto: "<strong>Imunidade Reforçada:</strong> Surpreendentemente, contém mais Vitamina C que os citrinos tradicionais, fortalecendo os glóbulos brancos." }
        ]
    },
    "maçã-verde": {
        titulo: "MAÇÃ-VERDE",
        imagem: "./assets/nutri-maca-verde.png",
        beneficios: [
            { icone: "🍏", texto: "<strong>Ácido Málico:</strong> Composto natural que estimula o metabolismo celular, auxilia na digestão e ajuda a desintoxicar o fígado." },
            { icone: "🧽", texto: "<strong>Efeito Pectina:</strong> Fibra solúvel que age como uma esponja, reduzindo a absorção de gorduras e auxiliando no controle do colesterol." },
            { icone: "📉", texto: "<strong>Controle Glicêmico:</strong> Possui menor teor de açúcar que a maçã vermelha, liberando energia de forma lenta e controlando a insulina." },
            { icone: "🦷", texto: "<strong>Saúde Bucal:</strong> Sua textura firme estimula a salivação e a mastigação, ajudando a limpar os dentes e a proteger as gengivas." },
            { icone: "⚖️", texto: "<strong>Gestão de Peso:</strong> Altamente saciante e com baixíssimas calorias, sendo ideal para acelerar o metabolismo e queimar gordura." }

        ]
    },
    "maracujá": {
        titulo: "MARACUJÁ",
        imagem: "./assets/nutri-maracuja.png",
        beneficios: [
            { icone: "💤", texto: "<strong>Passiflorina / Efeito Calmante:</strong> Atua diretamente no sistema nervoso, reduzindo a ansiedade, controlando o estresse e melhorando a qualidade do sono." },
            { icone: "🌊", texto: "<strong>Alívio Arterial:</strong> Seus compostos bioativos ajudam a relaxar os vasos sanguíneos, auxiliando no controle e na diminuição da pressão alta." },
            { icone: "💎", texto: "<strong>Pectina no Intestino:</strong> A fibra presente na casca e polpa forma um gel protetor que bloqueia parte da absorção de gorduras e açúcares ruins." },
            { icone: "🩹", texto: "<strong>Ação Cicatrizante:</strong> Rico em antioxidantes e Vitamina C que aceleram a regeneração dos tecidos e estimulam a produção de colágeno na pele." },
            { icone: "🛡️", texto: "<strong>Flavonoides Totais:</strong> Compostos que defendem as células contra os danos dos radicais livres, fortalecendo a barreira imunológica do corpo." }
        ]
    },
    "melancia": {
        titulo: "MELANCIA",
        imagem: "./assets/nutri-melancia.png",
        beneficios: [
            { icone: "💧", texto: "<strong>Hidratação Celular:</strong> Composta por 92% de água e eletrólitos essenciais, ela reidrata o organismo de forma rápida e natural." },
            { icone: "🏃", texto: "<strong>L-Citrulina / Recuperação:</strong> Contém um aminoácido que reduz as dores musculares e acelera a recuperação após esforços físicos." },
            { icone: "🩸", texto: "<strong>Pressão Arterial:</strong> Seus compostos bioativos ajudam a relaxar as artérias, melhorando o fluxo sanguíneo e aliviando a hipertensão." },
            { icone: "🧹", texto: "<strong>Ação Diurética:</strong> Estimula o bom funcionamento dos rins, auxiliando na eliminação de toxinas e combatendo a retenção de líquidos." },
            { icone: "🛡️", texto: "<strong>Carga de Licopeno:</strong> Fonte riquíssima deste antioxidante que combate radicais livres, protegendo contra o envelhecimento precoce." }
        ]
    },
    "jabuticaba": {
        titulo: "JABUTICABA",
        imagem: "./assets/nutri-jabuti.png",
        beneficios: [
            { icone: "🍇", texto: "<strong>Antocianinas Potentes:</strong> Sua casca escura é rica em pigmentos que combatem radicais livres e protegem contra o envelhecimento." },
            { icone: "✨", texto: "<strong>Estímulo de Colágeno:</strong> Contém nutrientes que auxiliam na firmeza da pele, prevenindo rugas e fortalecendo as articulações." },
            { icone: "💪", texto: "<strong>Controle Glicêmico:</strong> Possui compostos que ajudam a regular os níveis de glicose no sangue, auxiliando no controle da energia." },
            { icone: "🧹", texto: "<strong>Ação Desintoxicante:</strong> Auxilia na eliminação de toxinas do organismo e melhora o funcionamento geral do sistema digestivo." },
            { icone: "🛡️", texto: "<strong>Defesa Ativa:</strong> Fonte de minerais e vitaminas que blindam o sistema imunológico contra infecções e inflamações." }

        ]
    },
    "abacaxi": {
        titulo: "ABACAXI",
        imagem: "./assets/nutri-abacaxi.png",
        beneficios: [
            { icone: "🍍", texto: "<strong>Bromelina Ativa:</strong> Contém uma enzima poderosa que quebra proteínas, facilitando a digestão e reduzindo o inchaço estomacal." },
            { icone: "🛡️", texto: "<strong>Imunidade Reforçada:</strong> Rico em vitamina C, fortalece as defesas naturais do corpo contra gripes, resfriados e infecções." },
            { icone: "🔥", texto: "<strong>Ação Anti-inflamatória:</strong> Seus compostos ativos ajudam a reduzir inflamações no corpo, aliviando dores articulares e musculares." },
            { icone: "💧", texto: "<strong>Efeito Diurético:</strong> Alto teor de água e potássio que auxiliam no combate à retenção de líquidos e na eliminação de toxinas." },
            { icone: "✨", texto: "<strong>Renovação Celular:</strong> Fonte de antioxidantes e manganês, que protegem contra o envelhecimento precoce e mantêm a vitalidade da pele." }

        ]
    },
    "limão": {
        titulo: "LIMAO",
        imagem: "./assets/nutri-limao.png",
        beneficios: [
            { icone: "🍋", texto: "<strong>Super Carga de Vitamina C:</strong> Fortalece ativamente o sistema imunológico, ajudando a blindar o corpo contra gripes e infecções." },
            { icone: "🧹", texto: "<strong>Ação Detox e Digestiva:</strong> Estimula a produção de bile pelo fígado, facilitando a digestão e auxiliando na eliminação de toxinas." },
            { icone: "✨", texto: "<strong>Combate ao Envelhecimento:</strong> Rico em antioxidantes que neutralizam os radicais livres, mantendo a integridade e a juventude da pele." },
            { icone: "🩸", texto: "<strong>Alcalinização do Organismo:</strong> Apesar de ácido no sabor, seus minerais ajudam a equilibrar o pH sanguíneo após ser metabolizado." },
            { icone: "💧", texto: "<strong>Efeito Hidratante e Diurético:</strong> Auxilia no bom funcionamento dos rins, promovendo a eliminação de líquidos e reduzindo o inchaço." }
        ]

    },
    "amendoim": {
        titulo: "AMENDOIM",
        imagem: "./assets/nutri-amendoin.png",
        beneficios: [
            { icone: "❤️", texto: "<strong>Saúde Cardiovascular:</strong> Fonte de gorduras monoinsaturadas e resveratrol que promovem o bom funcionamento do coração." },
            { icone: "🔋", texto: "<strong>Energia Sustentada:</strong> Rico em proteínas e fibras que mantêm a saciedade e regulam a energia por mais tempo." },
            { icone: "🧠", texto: "<strong>Função Cognitiva:</strong> Contém niacina e vitamina E, essenciais para a saúde cerebral e a memória." },
            { icone: "🔥", texto: "<strong>Ação Anti-inflamatória:</strong> Seus compostos fenólicos ajudam a reduzir inflamações e o estresse oxidativo." },
            { icone: "💪", texto: "<strong>Saúde Muscular:</strong> Fonte de magnésio e fósforo que auxiliam na contração muscular e na saúde óssea." }
        ]
    },
    "milho-verde": {
        titulo: "MILHO-VERDE",
        imagem: "./assets/nutri-milho.png",
        beneficios: [
            { icone: "🌽", texto: "<strong>Energia e Vitalidade:</strong> Rico em carboidratos complexos de digestão lenta, que fornecem energia constante para as atividades diárias." },
            { icone: "👁️", texto: "<strong>Proteção da Visão:</strong> Fonte poderosa de luteína e zeaxantina, antioxidantes essenciais que protegem os olhos contra a degeneração macular." },
            { icone: "🧹", texto: "<strong>Saúde Intestinal:</strong> Possui alto teor de fibras insolúveis que melhoram o trânsito intestinal e auxiliam no bom funcionamento do sistema digestivo." },
            { icone: "🧠", texto: "<strong>Sistema Nervoso:</strong> Contém vitaminas do complexo B, especialmente a tiamina (B1), fundamentais para a memória e o metabolismo celular." },
            { icone: "🛡️", texto: "<strong>Ação Antioxidante:</strong> Rico em ácido ferúlico e vitamina A, que auxiliam no combate aos radicais livres e fortalecem o sistema de defesa." }
        ]


    },
    "uva": {
        titulo: "UVA",
        imagem: "./assets/nutri-uva.png",
        beneficios: [
            { icone: "🍇", texto: "<strong>Resveratrol Poderoso:</strong> Contém um potente antioxidante concentrado na casca que protege o coração e combate os radicais livres." },
            { icone: "❤️", texto: "<strong>Saúde Cardiovascular:</strong> Auxilia na dilatação dos vasos sanguíneos, melhorando a circulação e ajudando a regular a pressão arterial." },
            { icone: "✨", texto: "<strong>Longevidade Celular:</strong> Seus compostos fenólicos atuam diretamente na prevenção do envelhecimento precoce das células e da pele." },
            { icone: "🧠", texto: "<strong>Proteção Cerebral:</strong> Possui nutrientes que estimulam as funções cognitivas, auxiliando na melhora da memória e da atenção." },
            { icone: "🧹", texto: "<strong>Ação Depurativa:</strong> Seus ácidos naturais estimulam o funcionamento do fígado e dos rins, ajudando na eliminação de resíduos metabólicos." }
        ]
    },
    "coco": {
        titulo: "COCO",
        imagem: "./assets/nutri-coco.png",
        beneficios: [
            { icone: "🥥", texto: "<strong>Gorduras de Alta Qualidade:</strong> Rico em triglicerídeos de cadeia média (TCM), que são digeridos rapidamente e transformados em energia imediata." },
            { icone: "💧", texto: "<strong>Super Hidratação:</strong> Sua água possui um excelente balanço de eletrólitos (como potássio e magnésio), funcionando como um isotônico natural." },
            { icone: "🛡️", texto: "<strong>Ação Antimicrobiana:</strong> Contém ácido láurico e monolaurina, compostos que ajudam a combater vírus, bactérias e fungos no organismo." },
            { icone: "🧹", texto: "<strong>Funcionamento Intestinal:</strong> Sua polpa é rica em fibras que aumentam a saciedade, regulam o intestino e auxiliam no controle glicêmico." },
            { icone: "✨", texto: "<strong>Nutrição da Pele e Cabelos:</strong> Possui antioxidantes e ácidos graxos que promovem a hidratação profunda, elasticidade e combate aos radicais livres." }
        ]
    },
    "blue-ice": {
        titulo: "BLUE ICE",
        imagem: "./assets/blue-ice.png",
        beneficios: [
            { icone: "🍦", texto: "<strong>Sabor Nostálgico Marcante:</strong> Traz o clássico e irresistível sabor de tutti-frutti que desperta memórias afetivas e agrada a todas as idades." },
            { icone: "⚡", texto: "<strong>Aporte de Energia Rápida:</strong> Fonte de carboidratos que fornecem energia imediata para o corpo, ideal para um momento de recuperação e disposição." },
            { icone: "🧠", texto: "<strong>Estímulo de Bem-Estar:</strong> O consumo de sorvete ativa zonas de prazer no cérebro, liberando serotonina e auxiliando na redução do estresse diário." },
            { icone: "❄️", texto: "<strong>Refrescância Instantânea:</strong> Promove o resfriamento térmico corporal imediato, ideal para hidratação e alívio nos dias mais quentes do ano." },
            { icone: "✨", texto: "<strong>Textura Cremosa e Leve:</strong> Produzido com uma base que garante cremosidade excepcional, tornando a experiência de consumo altamente prazerosa." }
        ]
    },
    "chiclete": {
        titulo: "CHICLETE",
        imagem: "./assets/nutri-chiclete.png",
        beneficios: [
            { icone: "🍬", texto: "<strong>Estímulo ao Foco e Concentração:</strong> O ato de mastigar aumenta o fluxo sanguíneo cerebral, auxiliando na atenção e na agilidade mental." },
            { icone: "🧠", texto: "<strong>Alívio do Estresse:</strong> Ajuda a reduzir os níveis de cortisol (hormônio do estresse) no organismo, promovendo uma sensação de relaxamento." },
            { icone: "🧼", texto: "<strong>Higiene Bucal Rápida:</strong> Estimula a produção de saliva, o que ajuda a limpar resíduos alimentares e a neutralizar ácidos na boca." },
            { icone: "🍃", texto: "<strong>Hálito Renovado:</strong> Proporciona uma sensação imediata de refrescância e limpeza, ideal para o bem-estar e a confiança no dia a dia." },
            { icone: "🧹", texto: "<strong>Auxílio na Digestão:</strong> A mastigação sinaliza para o estômago a produção de ácidos digestivos, facilitando o processo após as refeições." }
        ]
    },
    "chocolate": {
        titulo: "CHOCOLATE",
        imagem: "./assets/nutri-choco.png",
        beneficios: [
            { icone: "🍫", texto: "<strong>Estímulo do Humor:</strong> Estimula a produção de endorfina e dopamina, promovendo uma sensação imediata de bem-estar e felicidade." },
            { icone: "❤️", texto: "<strong>Saúde Vascular:</strong> Rico em flavonoides, compostos que melhoram a circulação sanguínea e auxiliam na saúde do coração." },
            { icone: "🧠", texto: "<strong>Função Cognitiva:</strong> Melhora o fluxo de sangue no cérebro, beneficiando a memória, o foco e a atenção." },
            { icone: "🔋", texto: "<strong>Energia Rápida:</strong> Fonte de carboidratos e compostos bioativos que garantem um pico de disposição para a rotina ou treinos." },
            { icone: "✨", texto: "<strong>Ação Antioxidante:</strong> Contém nutrientes que combatem os radicais livres, auxiliando na proteção celular e na saúde da pele." }
        ]
    },
    "chocolate-branco": {


        titulo: "CHOCOLATE BRANCO",
        imagem: "./assets/chocolate-branco.png",
        beneficios: [
            { icone: "🍦", texto: "<strong>Sabor Cremoso Incomparável:</strong> Textura rica e aveludada que derrete na boca, proporcionando uma experiência sensorial única." },
            { icone: "🦴", texto: "<strong>Aporte de Cálcio:</strong> Por conter uma base concentrada de leite, auxilia diretamente no fortalecimento de ossos e dentes." },
            { icone: "⚡", texto: "<strong>Energia Imediata:</strong> Fonte rica em carboidratos e lipídeos, ideal para um rápido fornecimento de calorias e disposição." },
            { icone: "🧠", texto: "<strong>Estímulo de Bem-Estar:</strong> O consumo ativa os receptores de prazer no cérebro, estimulando a dopamina e reduzindo o estresse." },
            { icone: "✨", texto: "<strong>Textura e Versatilidade:</strong> A presença da manteiga de cacau garante uma consistência nobre, muito valorizada na confeitaria gourmet." }
        ]

    },
    "doce-de-leite": {
        titulo: "DOCE DE LEITE",
        imagem: "./assets/doce-de-leite.png",
        beneficios: [
            { icone: "🍯", texto: "<strong>Energia Rápida e Disposição:</strong> Rico em carboidratos simples que são absorvidos rapidamente, fornecendo combustível imediato para treinos ou dias intensos." },
{ icone: "🦴", texto: "<strong>Fonte de Cálcio:</strong> Por ser produzido a partir da redução do leite concentrado, preserva minerais essenciais para a integridade de ossos e dentes." },
{ icone: "🧠", texto: "<strong>Estímulo de Serotonina:</strong> O consumo de doces cremosos estimula a produção de neurotransmissores ligados ao prazer, reduzindo o estresse e melhorando o humor." },
{ icone: "💪", texto: "<strong>Aporte Proteico do Leite:</strong> Contém aminoácidos vindos da proteína láctea, auxiliando de forma complementar na manutenção dos tecidos musculares." },
{ icone: "✨", texto: "<strong>Sabor Tradicional Marcante:</strong> Sua textura caramelizada e cremosa confere alta palatabilidade, sendo um excelente ingrediente para o bem-estar sensorial." }
        ]
    },
    "groselha":{
        titulo: "GROSELHA",
        imagem: "./assets/groselha.png",
        beneficios: [
            { icone: "🍒", texto: "<strong>Carga de Antocianinas:</strong> Pigmento natural com altíssimo poder antioxidante que combate os radicais livres e protege as células contra o envelhecimento." },
{ icone: "🛡️", texto: "<strong>Aporte de Vitamina C:</strong> Fortalece ativamente o sistema imunológico, elevando as defesas naturais do organismo contra infecções e viroses." },
{ icone: "🩸", texto: "<strong>Proteção Vascular:</strong> Seus compostos bioativos ajudam a melhorar a resistência dos vasos capilares, otimizando a circulação sanguínea." },
{ icone: "⚙️", texto: "<strong>Ácidos Orgânicos Naturais:</strong> Contém substâncias que estimulam as glândulas digestivas, facilitando o processo de digestão e a absorção de nutrientes." },
{ icone: "✨", texto: "<strong>Ação Anti-inflamatória:</strong> Ajuda a reduzir processos inflamatórios no corpo, atuando na proteção das articulações e na saúde da pele." }
        ]
    },
    "leitinho":{
        titulo: "LEITINHO",
        imagem: "./assets/leitinho.png",
        beneficios: [
            { icone: "🦴", texto: "<strong>Cálcio de Alta Absorção:</strong> Mineral essencial e abundante que atua diretamente na formação, fortalecimento e manutenção da densidade óssea e dos dentes." },
{ icone: "💪", texto: "<strong>Proteínas Completas:</strong> Rico em proteínas de alto valor biológico que fornecem os aminoácidos necessários para a construção e recuperação muscular." },
{ icone: "🧠", texto: "<strong>Vitaminas do Complexo B:</strong> Contém nutrientes essenciais como a B12, que auxiliam no bom funcionamento do sistema nervoso e na produção de energia." },
{ icone: "⚡", texto: "<strong>Minerais Ativos / Potássio:</strong> Possui uma excelente combinação de eletrólitos que ajudam na contração muscular e no equilíbrio hídrico do corpo." },
{ icone: "✨", texto: "<strong>Vitamina A e Renovação:</strong> Fonte natural de vitamina A, que atua na proteção da visão, na saúde da pele e no fortalecimento do sistema de defesa." }
        ]
    },
    "leite-condensado":{
        titulo: "LEITE-CONDENSADO",
        imagem: "./assets/leite-condensado.png",
        beneficios: [
            { icone: "⚡", texto: "<strong>Injeção de Energia Rápida:</strong> Concentrado em carboidratos de fácil absorção, sendo excelente para fornecer disposição imediata em momentos de alta demanda." },
{ icone: "🦴", texto: "<strong>Nutrientes Base do Leite:</strong> Por ser feito a partir da redução do leite, mantém em sua composição parcelas importantes de cálcio, essenciais para os ossos." },
{ icone: "🧠", texto: "<strong>Estímulo de Conforto e Humor:</strong> O sabor doce concentrado ativa áreas de recompensa no cérebro, liberando endorfina e promovendo acolhimento emocional." },
{ icone: "🍰", texto: "<strong>Alta Palatabilidade:</strong> Sua textura densa e sabor marcante enriquecem o paladar, tornando-se o pilar central para o sucesso de receitas e sobremesas." },
{ icone: "💪", texto: "<strong>Aporte de Proteínas Lácteas:</strong> Preserva os aminoácidos naturais do leite integral, auxiliando de forma complementar na nutrição diária dos tecidos." }
        ]
    },
    "nata":{
        titulo: "NATA",
        imagem: "./assets/nata.png",
        beneficios: [
            { icone: "🥛", texto: "<strong>Energia de Longa Duração:</strong> Fonte concentrada de lipídeos saudáveis que fornecem combustível constante para o organismo, sem gerar picos de insulina." },
{ icone: "👁️", texto: "<strong>Vitaminas Lipossolúveis:</strong> Rica em Vitamina A, um nutriente essencial que atua diretamente na proteção da visão e na regeneração celular da pele." },
{ icone: "🦴", texto: "<strong>Absorção de Vitamina D:</strong> Sua base gordurosa facilita a fixação e o transporte de vitaminas que auxiliam na absorção de cálcio e no fortalecimento ósseo." },
{ icone: "⚖️", texto: "<strong>Estímulo à Saciedade:</strong> Por conter ácidos graxos densos, retarda o esvaziamento gástrico, ajudando no controle do apetite ao longo do dia." },
{ icone: "✨", texto: "<strong>Textura Nobre e Palatabilidade:</strong> Garante uma cremosidade excepcional e suavidade aos preparos, elevando a qualidade sensorial e o prazer no consumo." }
        ]
    },
    "pinta-lingua": {
        titulo: "PINTA-LÍNGUA",
        imagem: "./assets/pinta-lingua.png",
        beneficios: [
            { icone: "👅", texto: "<strong>Experiência Lúdica e Diversão:</strong> Possui uma fórmula divertida que colore temporariamente a língua, transformando o consumo em uma brincadeira interativa." },
{ icone: "⚡", texto: "<strong>Aporte de Energia Rápida:</strong> Rico em carboidratos simples que são metabolizados prontamente, garantindo um pico de disposição e vigor físico." },
{ icone: "🧠", texto: "<strong>Estímulo de Alegria e Humor:</strong> Ativa as zonas de recompensa e prazer do cérebro através de suas cores vivas, reduzindo o estresse e trazendo descontração." },
{ icone: "❄️", texto: "<strong>Refrescância Alucinante:</strong> Promove o resfriamento térmico imediato do corpo, sendo a escolha ideal para hidratar e aliviar o calor nos dias de verão." },
{ icone: "✨", texto: "<strong>Sabor Frutado Intenso:</strong> Desenvolvido com notas aromáticas marcantes que prolongam a sensação de sabor na boca, tornando a experiência muito prazerosa." }
        ]
    }

}

// 2. Mapeamento dos Elementos do DOM (Seleção dos alvos do HTML)

const imagemFruta = document.querySelector(".fruit-image");
const tituloVazado = document.querySelector(".main-fruit-title")
const destaquetitulo = document.querySelector(".highlight-fruit")
const listaNutricional = document.querySelector(".nutrition-list")
const botoesFrutas = document.querySelectorAll(".fruit-card")

//Seleção das setas pelas classes reais do seu HTML

const bntNext = document.querySelector(".arrow-right")
const btnPrev = document.querySelector(".arrow-left")
const btnBack = document.querySelector(".btn-back")
//3. controle de Estado do Carrossel (Indexador)
const ordemFrutas = Object.keys(dadosFrutas); // Cria o array ['morango', 'laranja']
let activeIndex = 0

// 4. Função de Atuaçização do Painel
function atualizarCardFruta(nomeFruta) {
    const frutaData = dadosFrutas[nomeFruta]

    if (!frutaData) return

    // Atualiza os components de imagem e texto
    imagemFruta.src = frutaData.imagem
    imagemFruta.alt = nomeFruta
    tituloVazado.textContent = nomeFruta
    destaquetitulo.textContent = frutaData.titulo

    //limpa a lista antiga
    listaNutricional.innerHTML = ""

    // Injeta os novos itens com os respectivos ícones definidos no banco de dados

    frutaData.beneficios.forEach(info => {
        const li = document.createElement("li")
        li.innerHTML = `
        <span class="nutri-icon">${info.icone}</span>
        <div class="nutri-text">${info.texto}</div>
        
        `
        listaNutricional.appendChild(li)
    })

    // Atualiza o índice para manter as setas em sincronia com os botões superiores

    activeIndex = ordemFrutas.indexOf(nomeFruta)

}

// 5. Evento de Clique nos Painéis de Frutas Superiores

botoesFrutas.forEach(botao => {
    botao.addEventListener("click", () => {
        const nomeFrutaSelecionada = botao.querySelector(".fruit-name").textContent.trim().toLowerCase()
        atualizarCardFruta(nomeFrutaSelecionada)
    })
})

// 6. Evento de Clique nas Setas (Navegação Avançar / Voltar)

bntNext.onclick = () => {
    activeIndex = (activeIndex >= ordemFrutas.length - 1) ? 0 : activeIndex + 1
    atualizarCardFruta(ordemFrutas[activeIndex])
}

btnPrev.onclick = () => {
    activeIndex = (activeIndex <= 0) ? ordemFrutas.length - 1 : activeIndex - 1
    atualizarCardFruta(ordemFrutas[activeIndex])
}


// 7. Evento de clique para voltar ao topo da página
btnBack.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}




