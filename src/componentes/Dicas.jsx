import React  from 'react';
import { StyleSheet, Text, View, StatusBar, Button, ScrollView, Dimensions, Image} from 'react-native';


export default function Dicas({route, navigation}) {
    return (

<ScrollView>
<View style={styles.container}>
<Text style={styles.h1}>Dicas para organizar sua vida financeira</Text>
<Image style={{width:Dimensions.get('screen').width,resizeMode:'contain', }} source={ require('../../assets/dicas.jpg')}/>

<Text style={styles.h2}>Deixe as desculpas de lado</Text>
<Text style={styles.h3}>Pare de pensar que ter uma vida financeira organizada é apenas um sonho. Transforme seus objetivos em realidade. Abandone as suas desculpas de que isso é difícil. Se você começar, vai ver que é simples. Não espere para amanhã, inicie a mudança agora. No futuro, o esforço valerá a pena. </Text>

<Text style={styles.h2}>Planejamento financeiro</Text>
<Text style={styles.h3}>Esse passo é fundamental para evoluir as suas finanças. Faça um planejamento financeiro. Você pode utilizar planilhas ou aplicativos de celular. Anote todos os seus gastos. Assim, você vai saber todas as entradas e saídas do seu orçamento. Separe cada um entre gastos fixos e variáveis. Identifique e reduza os supérfluos. Perceba que mesmo os de menor valor devem ser considerados. Ao final, você poderá fazer uma grande economia.</Text>

<Text style={styles.h2}>Pague as suas dívidas</Text>
<Text style={styles.h3}>Depois de fazer o seu planejamento financeiro, separe o valor necessário para pagar as suas dívidas. Se for impossível, negocie elas até que chegue em uma prestação que caiba no seu bolso. Saia desta grave estatística o quanto antes. </Text>

<Text style={styles.h2}>Reserva de emergência</Text>
<Text style={styles.h3}>Este é o próximo passo para dar um jeito nas suas finanças. É muito importante formar uma reserva financeira. Afinal, não sabemos o que o futuro nos reserva. Separe mensalmente parte dos seus ganhos para o seu colchão de liquidez. Os especialistas recomendam guardar, no mínimo, o valor equivalente a seis meses das suas despesas mensais. Assim, você estará preparado para qualquer imprevisto futuro. Por exemplo, desemprego ou problema de saúde. </Text>

<Text style={styles.h2}>Guarde dinheiro</Text>
<Text style={styles.h3}>Tenha o hábito de quando receber, guardar uma quantia do seu salário. Você deve fazer isso antes mesmo de pagar as contas. Os especialistas dizem que o ideal é guardar 10% dos seus ganhos. Quanto mais poupar, mais você vai ter. Coloque esse dinheiro em um local inacessível. Assim, você evita a tentação de gastar.</Text>

<Text style={styles.h2}>Estabeleça objetivos</Text>
<Text style={styles.h3}>Tenha os seus objetivos como a sua maior motivação. Faça um levantamento de todos os sonhos que você quer realizar, separando-os por prazo. Por exemplo, se for comprar um imóvel em 20 anos, calcule agora quanto você precisa poupar por mês para atingir esta meta. Tenha objetivos em curto, médio e longo prazo. Assim, você sempre estará em busca de melhoria contínua. Tenha em mente que você está economizando em prol de algo que você quer muito.</Text>

<Text style={styles.h2}>Invista em conhecimento</Text>
<Text style={styles.h3}>Investir na sua educação financeira vai fazer muita diferença para o seu orçamento. Hoje,  há muito meios para você obter conhecimento. Você pode ler livros sobre investimentos e finanças. Assistir a vídeos, como os do nosso canal no Youtube ou fazer um curso na área. Dessa forma, você vai saber como lidar com o seu dinheiro, aprendendo como investir as suas economia de forma rentável e segura. </Text>

<Text style={styles.h2}>Mobilize a sua família</Text>
<Text style={styles.h3}>A colaboração da sua família é muito importante para dar um jeito na vida financeira. Com a união, os resultados tendem a ser ainda melhores. Utilize boas dicas de economia doméstica. É possível reduzir gastos em todas as contas da casa, como na energia, água e no supermercado. Até as crianças devem participar. Desde cedo é bom ensinar a elas sobre o valor do dinheiro.  </Text>

<Text style={styles.h2}>Venda o que você não precisa mais </Text>
<Text style={styles.h3}>Essa é uma dica para você conseguir uma grana extra e praticar a economia sustentável. Faça um levantamento de todas as coisas que você não utiliza mais. Desde roupas, sapatos e móveis. Há diversos meios para vender, como em lojas virtuais, grupos de vendas e brechós. Esses itens podem ser muito úteis para outras pessoas. </Text>

<Text style={styles.h2}>Planeje a sua rotina</Text>
<Text style={styles.h3}>Ao planejar a sua rotina, você pode desviar de tudo o que é supérfluo. Principalmente dos pequenos e corrosivos gastos como por exemplo o hábito de comer fora frequentemente.Isso vale também para as saídas de final de semana e viagens. Faça um pequeno roteiro do que será feito. Tenha uma média dos valores e analise se eles cabem no seu orçamento. </Text>

<Text style={styles.h2}>Tenha disciplina</Text>
<Text style={styles.h3}>Para organizar a sua vida financeira, a disciplina é essencial. Isso é válido para controlar o seu gastos e para separar mensalmente a quantia a ser poupada. Desta maneira, você vai tornar essas tarefas em um hábito. Podendo economizar cada vez mais.</Text>

<Text style={styles.h2}>Aumente a sua renda</Text>
<Text style={styles.h3}>É possível se organizar mesmo ganhando pouco. Porém com mais dinheiro, essa tarefa fica ainda mais fácil. Para aumentar a sua renda, você pode pedir um aumento ou mudar de emprego. Considere também apostar em uma renda extra ou abrir o seu negócio. Como um empreendedor, você pode ganhar muito dinheiro. Claro que estudando e trabalhando muito. Empreender não é fácil. E claro, você deve aumentar o valor a ser economizado. Assim, a sua vida financeira entrará nos trilhos em menos tempo.</Text>

<Text style={styles.h2}>Invista o seu dinheiro</Text>
<Text style={styles.h3}>Esta dica é infalível para dar um jeito na sua vida financeira de uma vez por todas. O dinheiro que você separa mensalmente merece um bom caminho. Ou seja, invista-o. Você pode optar por aplicações em renda fixa como o Tesouro Direto, CDBs e Fundos de Investimentos ou também em renda variável, por exemplo, as ações. </Text>

<Text style={styles.h2}>Reavalie</Text>
<Text style={styles.h3}>Acompanhe de perto o desempenho dos seus investimentos. Conheça a rentabilidade da sua carteira e compare com os seus objetivos financeiros. Caso eles não estejam conforme o esperado, mude a sua estratégia. Faça uma readequação dos ativos, considerando também outros tipos de aplicações. </Text>


<Button color={'#020065'}
            title="Retornar a Home"
            onPress={() => navigation.navigate('Home')}/>



</View>
</ScrollView>
);
}


const styles = StyleSheet.create({
    h1: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'sans-serif-thin',
        backgroundColor: '#C5D2D9',
        paddingTop: 20,
        paddingBottom:20,
     },

    h2: {
        fontSize: 25,
        
        color: '#020065',
        fontFamily: 'sans-serif-medium',
        paddingTop: 20,
        paddingBottom:20,
        paddingHorizontal: 5,
     },

    h3: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'sans-serif-light',
        paddingTop: 20,
        paddingBottom:20,
        paddingHorizontal: 5,
     }, 

    container: {
        backgroundColor: 'white',
        
    } 

});