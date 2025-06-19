// script.js

// 1. Definição da História: Um objeto com chaves para cada capítulo/cena
// Cada capítulo deve ter:
// - text: O texto principal da cena.
// - image: O caminho para a imagem da cena (dentro da pasta 'assets/img/').
// - choices: Um array de objetos, onde cada objeto é uma escolha.
//   - text: O texto do botão de escolha.
//   - next: A chave do próximo capítulo para onde essa escolha leva.
// - outcome (Opcional): Se uma escolha leva a um "final", você pode indicar isso.
// - title (Opcional): Um título específico para o capítulo.

const story = {
    'intro': {
        title: "Um Novo Amanhecer na Fazenda",
        text: "O sol começa a nascer, pintando o céu de dourado sobre a vasta lavoura de Lavinya. Ela acorda cedo, como de costume, e sente o cheiro da terra úmida. Hoje será um dia de muito trabalho. Qual a primeira tarefa de Lavinya?",
        image: "assets/img/fazenda_sol.jpg",
        choices: [
            { text: "Verificar a horta", next: "horta_manutencao" },
            { text: "Alimentar os animais", next: "animais_cuidado" }
        ]
    },
    'horta_manutencao': {
        title: "A Horta Responde",
        text: "Lavinya se dirige à horta. As plantas de milho estão crescendo bem, mas ela nota algumas ervas daninhas. O que ela decide fazer primeiro?",
        choices: [
            { text: "Começar a capinar", next: "capinar_horta" },
            { text: "Verificar a irrigação", next: "irrigacao_horta" }
        ]
    },
    'capinar_horta': {
        title: "Mãos na Terra",
        text: "Enquanto capina, Lavinya sente o calor do sol. É um trabalho cansativo, mas ela sabe que é essencial para a saúde de suas plantas. De repente, ela encontra uma muda de feijão que parece doente. Como ela reage?",
      
        choices: [
            { text: "Tentar recuperar a muda", next: "recuperar_muda" },
            { text: "Remover a muda para evitar contaminação", next: "remover_muda" }
        ]
    },
    'recuperar_muda': {
        title: "A Esperança da Recuperação",
        text: "Lavinya dedica um tempo extra para a muda de feijão, aplicando um preparado natural que aprendeu com sua avó. Ela espera que dê certo. Com isso feito, ela continua o trabalho.",
       
        choices: [
            { text: "Voltar para as outras tarefas da horta", next: "horta_fim" }
        ]
    },
    'remover_muda': {
        title: "Decisões Difíceis",
        text: "Com um nó na garganta, Lavinya remove a muda doente para proteger as outras plantas. É uma perda, mas uma medida necessária para a safra. Ela continua a capinar com foco.",
        choices: [
            { text: "Terminar a capina", next: "horta_fim" }
        ]
    },
    'horta_fim': {
        title: "Horta Revigorada",
        text: "A horta está limpa e organizada. Lavinya sente uma satisfação enorme ao ver o trabalho concluído. Agora, ela precisa decidir sobre o almoço.",
        choices: [
            { text: "Preparar uma refeição simples na cozinha", next: "almoco_casa" },
            { text: "Levar uma marmita para o campo e comer por lá", next: "almoco_campo" }
        ]
    },
    'animais_cuidado': {
        title: "O Canto dos Bichos",
        text: "Lavinya vai ao encontro de seus animais. As galinhas cacarejam, as vacas mugem suavemente. Ela precisa alimentá-los e verificar a saúde de cada um. O que ela prioriza?",
        choices: [
            { text: "Preparar a ração para as galinhas", next: "racao_galinhas" },
            { text: "Verificar a vaca Mimosa, que parece um pouco quieta", next: "mimosa_verificar" }
        ]
    },
    'racao_galinhas': {
        title: "Galinhas Satisfeitas",
        text: "Lavinya prepara a ração e as galinhas se agitam ao vê-la. Enquanto as alimenta, ela recolhe os ovos frescos. Uma pequena vitória diária.",
        choices: [
            { text: "Agora, cuidar da Mimosa", next: "mimosa_verificar" }
        ]
    },
    'mimosa_verificar': {
        title: "A Preocupação com Mimosa",
        text: "Lavinya se aproxima de Mimosa, que realmente parece um pouco abatida. Ela examina a vaca com carinho. Mimosa tem uma pequena ferida na pata. O que fazer?",
        
        choices: [
            { text: "Limpar e aplicar um remédio caseiro", next: "remedio_caseiro" },
            { text: "Chamar o veterinário", next: "chamar_veterinario" }
        ]
    },
    'remedio_caseiro': {
        title: "A Sabedoria Ancestral",
        text: "Lavinya limpa a ferida de Mimosa e aplica uma pomada natural, feita com ervas que ela mesma cultiva. Ela aprendeu esses métodos com a sua mãe. Mimosa parece se acalmar. É um risco, mas ela confia na sua experiência.",
       
        choices: [
            { text: "Continuar os afazeres da manhã", next: "manha_fim" }
        ]
    },
    'chamar_veterinario': {
        title: "Buscando Ajuda Especializada",
        text: "Lavinya pega o telefone e liga para o veterinário da cidade vizinha. Ele promete vir na parte da tarde. É um gasto, mas a saúde de seus animais é prioridade. Ela sente um alívio ao ter buscado ajuda profissional.",
      
        choices: [
            { text: "Continuar os afazeres da manhã", next: "manha_fim" }
        ]
    },
    'manha_fim': {
        title: "Manhã de Tarefas Concluídas",
        text: "Após cuidar dos animais, Lavinya respira fundo. A manhã foi produtiva, mas ainda há muito a fazer. O estômago ronca. Hora de pensar no almoço.",
     
        choices: [
            { text: "Preparar uma refeição simples na cozinha", next: "almoco_casa" },
            { text: "Levar uma marmita para o campo e comer por lá", next: "almoco_campo" }
        ]
    },
    'almoco_casa': {
        title: "O Almoço em Casa",
        text: "Lavinya prepara um almoço rápido com o que tem na geladeira: arroz, feijão e legumes frescos da horta. Ela come em silêncio, recarregando as energias para a tarde. Depois de comer, o que ela fará?",
       
        choices: [
            { text: "Tirar uma soneca rápida", next: "soneca" },
            { text: "Revisar as finanças da fazenda", next: "financas" }
        ]
    },
    'almoco_campo': {
        title: "Almoço na Lavoura",
        text: "Lavinya pega sua marmita e vai para um cantinho sombrio na lavoura. Enquanto come, observa suas plantas e o céu. É um momento de paz e conexão com a terra. O que ela fará depois?",
      
        choices: [
            { text: "Continuar supervisionando a lavoura", next: "supervisionar_lavoura" },
            { text: "Voltar para casa e descansar um pouco", next: "soneca" }
        ]
    },
    'soneca': {
        title: "Pequeno Descanso",
        text: "Lavinya se permite uma breve soneca. Mesmo alguns minutos de descanso fazem uma grande diferença. Acordada, ela se sente mais disposta para os desafios da tarde.",
      
        choices: [
            { text: "Ir para a colheita", next: "colheita_inicio" },
            { text: "Organizar sementes para o próximo plantio", next: "organizar_sementes" }
        ]
    },
    'financas': {
        title: "Desafios Administrativos",
        text: "Lavinya senta-se com seus cadernos e calculadora. A gestão financeira da fazenda é um desafio constante, com preços flutuantes e custos crescentes. Ela analisa os números com seriedade.",
       
        choices: [
            { text: "Decidir investir em nova tecnologia", next: "investir_tecnologia" },
            { text: "Buscar crédito em um banco", next: "buscar_credito" }
        ]
    },
    'investir_tecnologia': {
        title: "Inovação para o Futuro",
        text: "Lavinya decide que é hora de investir em um novo sistema de irrigação por gotejamento, que economizará água e trabalho. É um investimento alto, mas ela acredita no retorno a longo prazo.",
     
        choices: [
            { text: "Voltar para o campo", next: "colheita_inicio" }
        ]
    },
    'buscar_credito': {
        title: "A Busca por Apoio",
        text: "Lavinya pesquisa linhas de crédito para pequenos produtores. É um processo burocrático e muitas vezes difícil para mulheres, mas ela está determinada a conseguir o apoio necessário para sua fazenda.",
      
        choices: [
            { text: "Voltar para o campo", next: "colheita_inicio" }
        ]
    },
    'supervisionar_lavoura': {
        title: "Olhar Atento à Lavoura",
        text: "Lavinya caminha pela lavoura, observando o crescimento das plantas, identificando possíveis pragas ou doenças. Seu conhecimento e sua intuição são seus maiores aliados. Ela nota que o céu está começando a escurecer. Sinal de chuva.",
       
        choices: [
            { text: "Apressar a colheita para hoje", next: "colheita_inicio" },
            { text: "Preparar a lavoura para a chuva e adiar a colheita", next: "preparar_chuva" }
        ]
    },
    'colheita_inicio': {
        title: "O Fruto do Trabalho",
        text: "É tempo de colheita! Lavinya chama seus ajudantes para iniciar a colheita dos vegetais maduros. É a recompensa de meses de trabalho duro.",
      
        choices: [
            { text: "Colher manualmente (mais qualidade, mais tempo)", next: "colheita_manual" },
            { text: "Usar equipamento (mais rápido, mas exige manutenção)", next: "colheita_equipamento" }
        ]
    },
    'colheita_manual': {
        title: "A Arte da Colheita Manual",
        text: "Lavinya e seus ajudantes colhem os vegetais com cuidado, um a um. É um processo mais lento, mas garante a melhor qualidade dos produtos. Ela sente um orgulho imenso de cada legume colhido.",
      
        choices: [
            { text: "Levar os produtos para a feira", next: "feira_venda" },
            { text: "Estocar para venda futura", next: "estocar_produtos" }
        ]
    },
    'colheita_equipamento': {
        title: "Tecnologia no Campo",
        text: "Lavinya utiliza o pequeno trator para auxiliar na colheita. O processo é mais rápido, liberando tempo para outras tarefas. No entanto, o equipamento precisa de atenção e manutenção constante.",
       
        choices: [
            { text: "Levar os produtos para a feira", next: "feira_venda" },
            { text: "Estocar para venda futura", next: "estocar_produtos" }
        ]
    },
    'preparar_chuva': {
        title: "A Prevenção é Chave",
        text: "Lavinya decide preparar a lavoura para a iminente chuva, garantindo que a água escoe corretamente e que as mudas jovens estejam protegidas. Ela sabe que a natureza manda, e a prevenção é sua melhor amiga.",
     
        choices: [
            { text: "Verificar o galpão de armazenamento", next: "galpao_verificacao" }
        ]
    },
    'galpao_verificacao': {
        title: "Segurança no Armazenamento",
        text: "Lavinya inspeciona o galpão de armazenamento para garantir que esteja seguro e seco. Produtos bem armazenados significam menos perdas e mais lucro.",
      
        choices: [
            { text: "O dia se encerra", next: "fim_dia" }
        ]
    },
    'feira_venda': {
        title: "A Venda na Feira",
        text: "Lavinya leva seus produtos frescos para a feira local. Ela conversa com os clientes, compartilha suas receitas e vende com orgulho o fruto de seu trabalho. É um momento de conexão com a comunidade e de retorno financeiro.",
        
        choices: [
            { text: "Voltar para casa e descansar", next: "fim_dia" }
        ]
    },
    'estocar_produtos': {
        title: "Estratégia de Venda",
        text: "Lavinya decide estocar parte da colheita para vender em um momento de preços mais favoráveis. É uma aposta, mas ela conhece o mercado. O armazenamento adequado é fundamental para não ter perdas.",
       
        choices: [
            { text: "Voltar para casa e descansar", next: "fim_dia" }
        ]
    },
    'organizar_sementes': {
        title: "Planejando o Futuro",
        text: "Lavinya dedica um tempo para organizar e selecionar as sementes para o próximo plantio. A escolha das sementes certas é crucial para o sucesso das futuras safras.",
       
        choices: [
            { text: "O dia se encerra", next: "fim_dia" }
        ]
    },
    'fim_dia': {
        title: "O Fim de um Longo Dia",
        text: "O sol se põe, e Lavinya retorna para casa exausta, mas com a sensação de dever cumprido. Cada dia no campo é uma batalha vencida, uma lição aprendida. Ela já começa a sentir a mudança no ar, o prenúncio de uma nova estação. O que o futuro reserva?",
      
        choices: [
            { text: "Preparar-se para o inverno", next: "frieza_do_inverno" },
            { text: "Rever os resultados da safra", next: "rever_resultados" }
        ]
    },
    // --- Capítulos Adicionais que criamos ---
    'frieza_do_inverno': {
        title: "O Rigor do Inverno na Fazenda",
        text: "Os dias ficaram mais curtos, e o vento cortante do inverno varre a fazenda. O solo está mais duro e o crescimento das plantas diminui consideravelmente. Lavinya sabe que essa estação exige cuidado extra e muita resiliência, tanto para a terra quanto para si mesma. Há menos colheita, mas o trabalho não para. Qual é a maior preocupação de Lavinya neste inverno?",
      
        choices: [
            { text: "Proteger os animais do frio intenso e garantir sua alimentação.", next: "proteger_animais_inverno" },
            { text: "Realizar a manutenção de equipamentos e estruturas da fazenda.", next: "manutencao_inverno" },
            { text: "Buscar novas fontes de renda para compensar a baixa produção.", next: "renda_inverno" }
        ]
    },
    'proteger_animais_inverno': {
        title: "O Abrigo dos Animais",
        text: "Lavinya passa horas extras no celeiro, reforçando o isolamento e garantindo que o gado e as aves tenham abrigo e feno suficientes. O frio intenso é um desafio para todos, mas ela se esforça para manter seus animais confortáveis e saudáveis. O bem-estar deles é vital para a fazenda.",
      
        choices: [
            { text: "Planejar as atividades para os próximos meses", next: "planejar_inverno_fim" }
        ]
    },
    'manutencao_inverno': {
        title: "Tempo para Reparar",
        text: "Com a redução do trabalho no campo, Lavinya aproveita para consertar o trator, revisar as cercas e fazer pequenos reparos nas construções da fazenda. É um trabalho minucioso que garante que tudo estará pronto para a próxima primavera.",
      
        choices: [
            { text: "Planejar as atividades para os próximos meses", next: "planejar_inverno_fim" }
        ]
    },
    'renda_inverno': {
        title: "Novas Estratégias de Renda",
        text: "Para complementar a renda no inverno, Lavinya decide produzir e vender geleias e conservas com os últimos frutos do outono, além de artesanato com fibras naturais. Ela vai à cidade oferecer seus produtos, buscando diversificar e manter a fazenda próspera.",
       
        choices: [
            { text: "Planejar as atividades para os próximos meses", next: "planejar_inverno_fim" }
        ]
    },
    'planejar_inverno_fim': {
        title: "Preparando a Próxima Estação",
        text: "Mesmo com o frio do inverno, Lavinya já está pensando no futuro. Ela revisa catálogos de sementes, pesquisa novas técnicas de plantio e sonha com o verde da próxima primavera. A vida no campo é um ciclo constante de desafios e renovação.",
     
        choices: [
            { text: "Aguardar a chegada do aroma da primavera", next: "aroma_de_primavera" }
        ]
    },
    'aroma_de_primavera': {
        title: "A Promessa da Primavera",
        text: "Com a chegada da primavera, a fazenda se enche de cores e vida. O ar carrega o aroma de flores desabrochando e da terra molhada. É o momento ideal para preparar o solo e iniciar novos plantios. Lavinya sente a energia da estação e a esperança de uma nova safra. Qual cultura ela decide priorizar neste ciclo?",
     
        choices: [
            { text: "Plantar uma nova área de flores para atrair polinizadores e embelezar a fazenda.", next: "plantio_flores" },
            { text: "Investir no plantio de uma nova variedade de grãos, mais resistente e com maior valor de mercado.", next: "plantio_graos_novos" },
            { text: "Focar em vegetais orgânicos para o consumo local, fortalecendo a agricultura familiar.", next: "plantio_organicos" }
        ]
    },
    'plantio_flores': {
        title: "Cores e Vida no Campo",
        text: "Lavinya dedica uma área ao plantio de girassóis e outras flores vibrantes. Além de atrair abelhas e outros polinizadores essenciais para a saúde da fazenda, as flores também trazem alegria e beleza para a paisagem. É um investimento no equilíbrio natural e na alma do lugar.",
     
        choices: [
            { text: "Continuar as tarefas da primavera", next: "primavera_fim" }
        ]
    },
    'plantio_graos_novos': {
        title: "A Aposta na Inovação",
        text: "Com base em sua pesquisa, Lavinya decide arriscar no plantio de um novo tipo de grão, resistente à seca e de alta demanda no mercado. É uma aposta calculada, visando maior rentabilidade e sustentabilidade a longo prazo.",
      
        choices: [
            { text: "Continuar as tarefas da primavera", next: "primavera_fim" }
        ]
    },
    'plantio_organicos': {
        title: "Cultivo Consciente",
        text: "Lavinya reforça seu compromisso com a agricultura orgânica, plantando uma grande variedade de vegetais sem o uso de agrotóxicos. Ela sabe que é mais trabalhoso, mas a qualidade e a saúde que oferece à comunidade valem cada esforço.",
    
        choices: [
            { text: "Continuar as tarefas da primavera", next: "primavera_fim" }
        ]
    },
    'primavera_fim': {
        title: "O Campo Verdejante",
        text: "A primavera avança, e as plantações de Lavinya crescem vigorosas. Ela observa o milagre da vida brotando da terra. Mas nem tudo é calmaria... Um novo desafio pode surgir a qualquer momento. Qual o próximo passo de Lavinya?",
      
        choices: [
            { text: "Inspecionar a plantação em busca de pragas", next: "pragas_na_plantacao" },
            { text: "Rever o estoque de sementes", next: "organizar_sementes" }
        ]
    },
    'pragas_na_plantacao': {
        title: "A Invasão Invisível",
        text: "Lavinya, ao inspecionar sua plantação de milho, nota pequenas manchas nas folhas e alguns insetos estranhos. Uma praga! Se não agir rápido, a safra inteira pode ser comprometida. O desânimo tenta tomar conta, mas ela sabe que precisa agir. O que Lavinya decide fazer?",
       
        choices: [
            { text: "Aplicar um defensivo natural, feito com extratos de plantas.", next: "defensivo_natural_aplicado" },
            { text: "Buscar ajuda de um agrônomo para identificar a praga e a solução mais eficaz.", next: "agronomo_chamado" },
            { text: "Remover as plantas mais afetadas para tentar conter a infestação manualmente.", next: "remover_plantas_afetadas_praga" }
        ]
    },
    'defensivo_natural_aplicado': {
        title: "A Paciência da Natureza",
        text: "Lavinya prepara e aplica um defensivo natural em suas plantas. É um método que exige paciência e repetições, mas é mais ecológico e não agride o solo ou a saúde de quem consome. Ela monitora de perto os resultados, torcendo pela recuperação.",
     
        choices: [
            { text: "Continuar a rotina da fazenda", next: "rotina_apos_praga" }
        ]
    },
    'agronomo_chamado': {
        title: "Consultoria Especializada",
        text: "Lavinya contata um agrônomo da cooperativa local. Ele visita a fazenda, identifica a praga e sugere um plano de manejo integrado. O conhecimento técnico é um grande aliado para Lavinya, mesmo que signifique um investimento.",
     
        choices: [
            { text: "Continuar a rotina da fazenda", next: "rotina_apos_praga" }
        ]
    },
    'remover_plantas_afetadas_praga': {
        title: "Medidas Drásticas",
        text: "Com pesar, Lavinya decide remover e isolar as plantas mais gravemente afetadas para evitar que a praga se espalhe para o restante da lavoura. É uma perda, mas necessária para proteger o todo. Ela sente o peso da decisão, mas sabe que é para o bem maior.",
     
        choices: [
            { text: "Continuar a rotina da fazenda", next: "rotina_apos_praga" }
        ]
    },
    'rotina_apos_praga': {
        title: "Superando a Adversidade",
        text: "Após lidar com a praga, Lavinya retoma as atividades diárias. A vida no campo é assim: um desafio após o outro, mas com a recompensa de ver a terra produzindo. Ela mantém o olhar atento, sabendo que a vigilância é constante. O tempo passa e o verão se aproxima.",
    
        choices: [
            { text: "Observar o céu e o clima", next: "chuvas_de_verao" }
        ]
    },
    'chuvas_de_verao': {
        title: "A Força da Água",
        text: "Após semanas de sol forte, nuvens escuras se formam no horizonte. Uma chuva de verão intensa e repentina começa a cair. Embora a terra precise da água, uma tempestade forte demais pode causar erosão e danificar as plantações jovens. Lavinya olha para o céu e para o campo. Como ela reage a essa chuva inesperada?",
     
        choices: [
            { text: "Verificar os sistemas de drenagem para evitar enchentes nas áreas de plantio.", next: "drenagem_verificada" },
            { text: "Proteger as mudas mais frágeis, correndo para cobri-las com lonas.", next: "proteger_mudas_chuva" },
            { text: "Esperar a chuva passar, confiando na resistência da plantação e na força da natureza.", next: "confiar_na_natureza_chuva" }
        ]
    },
    'drenagem_verificada': {
        title: "Prevenção Essencial",
        text: "Lavinya corre para verificar os sulcos de drenagem, garantindo que a água escoe corretamente e não se acumule nas plantações. Sua previdência evita grandes prejuízos, e a água, que poderia ser inimiga, torna-se aliada.",
     
        choices: [
            { text: "Seguir com as tarefas do dia", next: "pos_chuva" }
        ]
    },
    'proteger_mudas_chuva': {
        title: "Ação Rápida",
        text: "Sem hesitar, Lavinya pega algumas lonas e corre para cobrir as mudas mais sensíveis. A chuva é forte, mas sua ação rápida minimiza os danos, salvando parte da futura colheita.",
       
        choices: [
            { text: "Seguir com as tarefas do dia", next: "pos_chuva" }
        ]
    },
    'confiar_na_natureza_chuva': {
        title: "A Resiliência do Campo",
        text: "Lavinya observa a chuva torrencial. Ela sabe que nem tudo está sob seu controle. Confia na força de suas plantas e na capacidade da terra de absorver a água. É um lembrete da humildade que a vida no campo ensina.",
      
        choices: [
            { text: "Seguir com as tarefas do dia", next: "pos_chuva" }
        ]
    },
    'pos_chuva': {
        title: "Depois da Tempestade",
        text: "A chuva finalmente cessa, deixando o ar fresco e a terra revigorada. Lavinya inspeciona os campos, avaliando os danos e os benefícios da água. Mais um dia, mais uma batalha com a natureza vencida. O verão segue seu curso.",
      
        choices: [
            { text: "Aguardar a brisa de outono e o tempo da colheita", next: "brisa_de_outono" }
        ]
    },
    'brisa_de_outono': {
        title: "Os Ventos da Colheita",
        text: "A brisa fresca do outono sopra pelos campos, trazendo consigo o cheiro da terra seca e o sussurro das folhas caindo. É tempo de colher o que foi plantado e de fazer o balanço do ano. Os dias são mais curtos, e o trabalho de final de safra é intenso. Lavinya reflete sobre a estação. O que ela decide fazer com sua colheita principal?",
       
        choices: [
            { text: "Levar grande parte da colheita para vender na feira da cidade, buscando um bom preço.", next: "venda_feira" },
            { text: "Armazenar uma parte significativa da produção para vender em meses de entressafra, quando os preços são melhores.", next: "armazenamento_estrategico" },
            { text: "Processar parte dos alimentos para criar produtos de maior valor agregado (doces, conservas, farinhas).", next: "processamento_alimentos" }
        ]
    },
    'venda_feira': {
        title: "A Venda na Feira",
        text: "Lavinya leva seus produtos frescos para a feira local. Ela conversa com os clientes, compartilha suas receitas e vende com orgulho o fruto de seu trabalho. É um momento de conexão com a comunidade e de retorno financeiro. O dia na feira é sempre gratificante, mas exaustivo.",
     
        choices: [
            { text: "Fim do dia e balanço da colheita", next: "fim_ciclo_outono" }
        ]
    },
    'armazenamento_estrategico': {
        title: "Estratégia de Venda",
        text: "Lavinya decide estocar parte da colheita para vender em um momento de preços mais favoráveis. É uma aposta, mas ela conhece o mercado. O armazenamento adequado é fundamental para não ter perdas, e ela investe tempo para garantir isso.",
      
        choices: [
            { text: "Fim do dia e balanço da colheita", next: "fim_ciclo_outono" }
        ]
    },
    'processamento_alimentos': {
        title: "Transformando e Agregando Valor",
        text: "No galpão, Lavinya e sua equipe transformam parte da colheita em deliciosas geleias, compotas e farinhas. É um trabalho extra, mas que agrega muito valor aos seus produtos, permitindo vendê-los a um preço melhor e em diferentes mercados.",
      
        choices: [
            { text: "Fim do dia e balanço da colheita", next: "fim_ciclo_outono" }
        ]
    },
    'fim_ciclo_outono': {
        title: "Fim do Ciclo: O Balanço do Ano",
        text: "Com a colheita encerrada e os produtos destinados, Lavinya faz um balanço do ano. Houve desafios, vitórias e muito aprendizado. A fazenda é um reflexo do seu esforço e paixão. O inverno se aproxima, trazendo um novo ritmo.",
      
        choices: [
            { text: "Preparar-se para o inverno", next: "frieza_do_inverno" },
            { text: "Descansar e refletir sobre o futuro", next: "fim_final" }
        ]
    },

    // --- Capítulos de Finais (adapte conforme seus desfechos) ---
    'fim_final': {
        title: "Uma Jornada de Superação",
        text: "Lavinya respira fundo. A vida no campo é um ciclo contínuo de desafios e recompensas. Sua força, sabedoria e conexão com a terra a guiam. Sua história inspira e mostra a vital importância das mulheres na agricultura. Obrigado por vivenciar a jornada de Lavinya!",
      
        outcome: "end"
    },
    'rever_resultados': {
        title: "Balanço Anual e Próximos Passos",
        text: "Lavinya revisa detalhadamente os resultados da safra. A análise dos números revela os pontos fortes e os desafios a serem superados. Com base nisso, ela começa a traçar as estratégias para o próximo ano. É um trabalho essencial de gestão para o futuro da fazenda. O que ela prioriza para a próxima estação?",
      
        choices: [
            { text: "Investir em novas tecnologias", next: "investir_tecnologia" },
            { text: "Focar na diversificação de produtos", next: "renda_inverno" },
            { text: "Reiniciar a jornada", next: "intro" }
        ]
    },
    'bad_ending_exemplo': {
        title: "Um Contratempo Inesperado",
        text: "Infelizmente, uma praga ou intempérie severa devastou parte da lavoura, causando uma perda significativa. Lavinya enfrenta a situação com resiliência, sabendo que no campo, nem tudo está sob seu controle. Ela já pensa em como se reerguer e aprender com a experiência. Nem sempre a batalha é vencida, mas a luta continua.",
     
        choices: [],
        outcome: "end"
    }
};

// Elementos do DOM (ATENÇÃO: id do botão de início da história mudou)
const storyIntroSection = document.getElementById('story-intro-section'); // CORRIGIDO PARA ID
const startStoryBtn = document.getElementById('start-story-btn');
const storyDisplaySection = document.getElementById('story-display-section');
const chapterTitle = document.getElementById('chapter-title');
const chapterImage = document.getElementById('chapter-image');
const chapterText = document.getElementById('chapter-text');
const choicesContainer = document.getElementById('choices-container');

let currentChapterKey = 'intro';

function displayChapter(chapterKey) {
    const chapter = story[chapterKey];

    if (!chapter) {
        chapterTitle.textContent = "Fim Inesperado da História!";
        chapterText.textContent = "Parece que a história chegou a um ponto sem continuação ou com um erro. Obrigado por jogar!";
        chapterImage.style.display = 'none';
        choicesContainer.innerHTML = `<button class="main-button" onclick="restartStory()">Recomeçar</button>`;
        return;
    }

    chapterTitle.textContent = chapter.title;
    chapterText.textContent = chapter.text;

    if (chapter.image) {
        chapterImage.src = chapter.image;
        chapterImage.alt = chapter.title;
        chapterImage.style.display = 'block';
    } else {
        chapterImage.style.display = 'none';
    }

    choicesContainer.innerHTML = '';

    if (chapter.choices && chapter.choices.length > 0) {
        chapter.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-btn');
            button.textContent = choice.text;
            button.dataset.next = choice.next;
            button.addEventListener('click', handleChoice);
            choicesContainer.appendChild(button);
        });
    } else {
        const restartButton = document.createElement('button');
        restartButton.classList.add('main-button');
        restartButton.textContent = "Recomeçar a Jornada";
        restartButton.onclick = restartStory;
        choicesContainer.appendChild(restartButton);
    }
}

function handleChoice(event) {
    const nextChapterKey = event.target.dataset.next;
    currentChapterKey = nextChapterKey;
    displayChapter(currentChapterKey);
}

function restartStory() {
    currentChapterKey = 'intro';
    storyDisplaySection.style.display = 'none';
    storyIntroSection.style.display = 'block';

    chapterTitle.textContent = '';
    chapterText.textContent = '';
    chapterImage.src = '';
    choicesContainer.innerHTML = '';
}

startStoryBtn.addEventListener('click', () => {
    storyIntroSection.style.display = 'none';
    storyDisplaySection.style.display = 'block';
    displayChapter(currentChapterKey);
});

// Funcionalidade do Aviso de Cookies
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-consent-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies-btn');

    // Verifica se o usuário já aceitou os cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (!hasAcceptedCookies) {
        cookieBanner.style.display = 'flex'; // Exibe o banner se não aceitou
    } else {
        cookieBanner.style.display = 'none'; // Esconde se já aceitou
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true'); // Marca como aceito
        cookieBanner.style.display = 'none'; // Esconde o banner
    });
});