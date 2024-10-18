import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAWP7H2QGzrWc8Kv0J5ZkE6LWxG6T9bcR0",
  authDomain: "sabornamao-87507.firebaseapp.com",
  projectId: "sabornamao-87507",
  storageBucket: "sabornamao-87507.appspot.com",
  messagingSenderId: "877144288806",
  appId: "1:877144288806:web:210a093781fa8218fd80e7",
  measurementId: "G-2G2R6WDP8P"
};
import Heranca from './src/pages/heranca';
import Login from './src/pages/login';
import Home from './src/pages/home';
import Almoco_domingo from './src/pages/almoco_domingo';
import Ceia_natal from './src/pages/ceia_natal';
import Festa_junina from './src/pages/festa_junina';
import Kids from './src/pages/kids';
import Kids2 from './src/pages/kids2';
import Morando_sozinho from './src/pages/morando_sozinho';
import Noite_garotas from './src/pages/noite_garotas';
import Cookie from './src/pages/cookie';
import Pipoca from './src/pages/pipoca';
import Cupcake from './src/pages/cupcake';
import Pizza from './src/pages/pizza';
import Batata from './src/pages/batata';
import Hotdog from './src/pages/hotdog';
import Arroz from './src/pages/arroz';
import Coxinha from './src/pages/coxinha';
import Macarrao from './src/pages/macarrao';
import Pudim from './src/pages/pudim';
import Empadao from './src/pages/empadao';
import Panqueca from './src/pages/panqueca';
import Perfil from './src/pages/perfil';
import Cadastro from './src/pages/cadastro';
import Bolochoco from './src/pages/bolochoco';
import Picole from './src/pages/picole';
import Raspadinha from './src/pages/raspadinha';
import Pave from './src/pages/pave';
import Brigadeiro from './src/pages/brigadeiro';
import Danone from './src/pages/danone';
import Peru from './src/pages/peru';
import Salpicao from './src/pages/salpicao';
import Salada from './src/pages/salada';
import Bolinho_Arroz from './src/pages/bolinho_arroz';
import Arroz_Natal from './src/pages/arroz_natal';
import Farofa from './src/pages/farofa';
import Vegano from './src/pages/vegano';
import Sucos from './src/pages/sucos';
import Falafel from './src/pages/falafel';
import BomBom from './src/pages/bombom';
import Pao_Queijo from './src/pages/pao_queijo';
import Cuscuz from './src/pages/cuscuz';
import Almodegas from './src/pages/almodegas';
import Nhoque from './src/pages/nhoque';
import Morango from './src/pages/morango';
import Abacaxi from './src/pages/abacaxi';
import Limao from './src/pages/limao';
import Cenoura from './src/pages/cenoura';
import Melancia from './src/pages/melancia';
import Verde from './src/pages/verde';
import Pamonha from './src/pages/pamonha';
import Pacoca from './src/pages/pacoca';
import Quentao from './src/pages/quentao';
import Bolo_fuba from './src/pages/bolo_fuba';
import Maca_amor from './src/pages/maca_amor';
import Milho from './src/pages/milho';
import Feijao from './src/pages/feijao';
import Escondidinho from './src/pages/escondidinho';
import Paella from './src/pages/paella';
import Frango from './src/pages/frango';
import Torta from './src/pages/torta';
import Churrasco from './src/pages/churrasco';
import Vegetariano from './src/pages/vegetariano';
import Quiche from './src/pages/quiche';
import Torta2 from './src/pages/torta2';
import Queijo from './src/pages/queijo';
import Burguer from './src/pages/burguer';
import Lasanha from './src/pages/lasanha';
import Pasta from './src/pages/pasta';
import Mamaes from './src/pages/mamaes';
import Sopa from './src/pages/sopa';
import Papinha from './src/pages/papinha';
import Pao from './src/pages/pao';
import Panqueca_maca from './src/pages/panqueca_maca';
import Panqueca_banana from './src/pages/panqueca_banana';
import Macarrao_bebe from './src/pages/macarrao_bebe';
import Pascoa from './src/pages/pascoa';
import Bacalhau from './src/pages/bacalhau';
import Peixe from './src/pages/peixe';
import Bobo from './src/pages/bobo';
import Coelho_choco from './src/pages/coelho_choco';
import Ovo_choco from './src/pages/ovo_choco';
import Cuscuz2 from './src/pages/cuscuz2';
import Aniversario from './src/pages/aniversario';
import Brigadeiro2 from './src/pages/brigadeiro2';
import Bolochoco2 from './src/pages/bolochoco2';
import Coxinha2 from './src/pages/coxinha2';
import Nachos from './src/pages/nachos';
import Beijinho from './src/pages/beijinho';
import Dadinho from './src/pages/dadinho';
import Bebidas from './src/pages/bebidas';
import Dietas from './src/pages/dietas';
import Restricao from './src/pages/restricao';
import Cha from './src/pages/cha';
import Lactose from './src/pages/lactose';
import Pao_lactose from './src/pages/pao_lactose';
import Cookies_lactose from './src/pages/cookies_lactose';
import Chips_lactose from './src/pages/chips_lactose';
import Brigadeiro_lactose from './src/pages/brigadeiro_lactose';
import Bolo_lactose from './src/pages/bolo_lactose';
import Churros from './src/pages/churros';
import Gluten from './src/pages/gluten';
import Bolo_gluten from './src/pages/bolo_gluten';
import Sanduiche_gluten from './src/pages/sanduiche_gluten';
import Brownie_gluten from './src/pages/brownie_gluten';
import Doritos_gluten from './src/pages/doritos_gluten';
import Pastel_gluten from './src/pages/pastel_gluten';
import Pizza_gluten from './src/pages/pizza_gluten';
import Laranja_cha from './src/pages/laranja_cha';
import Margarida from './src/pages/margarida';
import Macha from './src/pages/macha';
import Canela from './src/pages/canela';
import Hibisco from './src/pages/hibisco';
import Gengibre from './src/pages/gengibre';
import Diabetes from './src/pages/diabetes';
import Torta3 from './src/pages/torta3';
import Salada2 from './src/pages/salada2';
import Quibe from './src/pages/quibe';
import Salmao from './src/pages/salmao';
import Palitos from './src/pages/palitos';
import Cheesecake from './src/pages/cheesecake';
import Vitaminas from './src/pages/vitaminas';
import Vitamina_acai from './src/pages/vitamina_acai';
import Vitamina_banana from './src/pages/vitamina_banana';
import Vitamina_maca from './src/pages/vitamina_maca';
import Vitamina_mamao from './src/pages/vitamina_mamao';
import Vitamina_melancia from './src/pages/vitamina_melancia';
import Vitamina_morango from './src/pages/vitamina_morango';
import Halloween from './src/pages/halloween';
import Dedo from './src/pages/dedo';
import Olho from './src/pages/olho';
import Caveira from './src/pages/caveira';
import Pudim_sangue from './src/pages/pudim_sangue';
import Minhoca from './src/pages/minhoca';
import Bolinhoo from './src/pages/bolinhoo';
import Ano_novo from './src/pages/ano_novo';
import Coxa from './src/pages/coxa';
import Farofabacon from './src/pages/farofabacon';
import Frutas from './src/pages/frutas';
import Saladabatata from './src/pages/saladabatata';
import Lombo from './src/pages/lombo';
import Risoto from './src/pages/risoto';
import Festa from './src/pages/festa';
import Espetinho from './src/pages/espetinho';
import Tartare from './src/pages/tartare';
import Queijo_festa from './src/pages/queijo_festa';
import Espetinho_camarao from './src/pages/espetinho_camarao';
import Ostras from './src/pages/ostras';
import Canapes from './src/pages/canapes';



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Stack = createNativeStackNavigator();




export default function App() {
 
  return (
    <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="perfil" component={Perfil} options={{ headerShown: false }} />
          <Stack.Screen name="cadastro" component={Cadastro} options={{ headerShown: false }} />
          <Stack.Screen name="heranca" component={Heranca} options={{ headerShown: false }} />
               

         <Stack.Screen name="almoco_domingo" component={Almoco_domingo} options={{ headerShown: false }}/>

<Stack.Screen name="feijao" component={Feijao} options={{ headerShown: false }}/>

<Stack.Screen name="paella" component={Paella} options={{ headerShown: false }}/>

<Stack.Screen name="churrasco" component={Churrasco} options={{ headerShown: false }}/>

<Stack.Screen name="frango" component={Frango} options={{ headerShown: false }}/>

<Stack.Screen name="escondidinho" component={Escondidinho} options={{ headerShown: false }}/>

<Stack.Screen name="torta" component={Torta} options={{ headerShown: false }}/>



         <Stack.Screen name="sucos" component={Sucos} options={{ headerShown: false }}/>

<Stack.Screen name="limao" component={Limao} options={{ headerShown: false }}/>

<Stack.Screen name="melancia" component={Melancia} options={{ headerShown: false }}/>

<Stack.Screen name="morango" component={Morango} options={{ headerShown: false }}/>

<Stack.Screen name="cenoura" component={Cenoura} options={{ headerShown: false }}/>

<Stack.Screen name="verde" component={Verde} options={{ headerShown: false }}/>

<Stack.Screen name="abacaxi" component={Abacaxi} options={{ headerShown: false }}/>



         <Stack.Screen name="vegano" component={Vegano} options={{ headerShown: false }}/>
<Stack.Screen name="falafel" component={Falafel} options={{ headerShown: false }}/>

<Stack.Screen name="almodegas" component={Almodegas} options={{ headerShown: false }}/>

<Stack.Screen name="bombom" component={BomBom} options={{ headerShown: false }}/>

<Stack.Screen name="nhoque" component={Nhoque} options={{ headerShown: false }}/>

<Stack.Screen name="pao_queijo" component={Pao_Queijo} options={{ headerShown: false }}/>

<Stack.Screen name="cuscuz" component={Cuscuz} options={{ headerShown: false }}/>



         <Stack.Screen name="ceia_natal" component={Ceia_natal} options={{ headerShown: false }}/>

          <Stack.Screen name="peru" component={Peru}options={{ headerShown: false }}/>

           <Stack.Screen name="salada" component={Salada} options={{ headerShown: false }}/>

            <Stack.Screen name="salpicao" component={Salpicao} options={{ headerShown: false }}/>

             <Stack.Screen name="arroz_natal" component={Arroz_Natal} options={{ headerShown: false }}/>

              <Stack.Screen name="bolinho_arroz" component={Bolinho_Arroz} options={{ headerShown: false }}/>

               <Stack.Screen name="farofa" component={Farofa} options={{ headerShown: false }}/>



         <Stack.Screen name="festa_junina" component={Festa_junina} options={{ headerShown: false }}/>

<Stack.Screen name="pamonha" component={Pamonha} options={{ headerShown: false }}/>

<Stack.Screen name="pacoca" component={Pacoca} options={{ headerShown: false }}/>

<Stack.Screen name="milho" component={Milho} options={{ headerShown: false }}/>

<Stack.Screen name="quentao" component={Quentao} options={{ headerShown: false }}/>

<Stack.Screen name="bolo_fuba" component={Bolo_fuba} options={{ headerShown: false }}/>

<Stack.Screen name="maca_amor" component={Maca_amor} options={{ headerShown: false }}/>


         <Stack.Screen name="kids" component={Kids} options={{ headerShown: false }} />
         
          <Stack.Screen name="bolochoco" component={Bolochoco} options={{ headerShown: false }}/>

          <Stack.Screen name="picole" component={Picole} options={{ headerShown: false }}/>

          <Stack.Screen name="raspadinha" component={Raspadinha} options={{ headerShown: false }}/>

          <Stack.Screen name="pave" component={Pave} options={{ headerShown: false }}/>

          <Stack.Screen name="danone" component={Danone} options={{ headerShown: false }}/>

         <Stack.Screen name="brigadeiro" component={Brigadeiro} options={{ headerShown: false }}/>



         <Stack.Screen name="morando_sozinho" component={Morando_sozinho} options={{ headerShown: false }}/>
         
 <Stack.Screen name="arroz" component={Arroz} options={{ headerShown: false }}/>

         <Stack.Screen name="coxinha" component={Coxinha} options={{ headerShown: false }}/>

         <Stack.Screen name="macarrao" component={Macarrao} options={{ headerShown: false }}/>

         <Stack.Screen name="pudim" component={Pudim} options={{ headerShown: false }}/>

         <Stack.Screen name="empadao" component={Empadao} options={{ headerShown: false }}/>

         <Stack.Screen name="panqueca" component={Panqueca} options={{ headerShown: false }}/>


  <Stack.Screen name="noite_garotas" component={Noite_garotas} options={{ headerShown: false }}/>

    <Stack.Screen name="cookie" component={Cookie} options={{ headerShown: false }}/>

         <Stack.Screen name="pipoca" component={Pipoca} options={{ headerShown: false }}/>

         <Stack.Screen name="cupcake" component={Cupcake} options={{ headerShown: false }}/>

         <Stack.Screen name="pizza" component={Pizza} options={{ headerShown: false }}/>

         <Stack.Screen name="batata" component={Batata} options={{ headerShown: false }}/>

         <Stack.Screen name="hotdog" component={Hotdog} options={{ headerShown: false }} />


<Stack.Screen name="vegetariano" component={Vegetariano} options={{ headerShown: false }}/>

<Stack.Screen name="quiche" component={Quiche} options={{ headerShown: false }}/>

<Stack.Screen name="lasanha" component={Lasanha} options={{ headerShown: false }}/>

<Stack.Screen name="burguer" component={Burguer} options={{ headerShown: false }}/>

<Stack.Screen name="pasta" component={Pasta} options={{ headerShown: false }}/>

<Stack.Screen name="queijo" component={Queijo} options={{ headerShown: false }}/>

<Stack.Screen name="torta2" component={Torta2} options={{ headerShown: false }}/>




<Stack.Screen name="mamaes" component={Mamaes} options={{ headerShown: false }}/>

<Stack.Screen name="macarrao_bebe" component={Macarrao_bebe} options={{ headerShown: false }}/>

<Stack.Screen name="panqueca_banana" component={Panqueca_banana} options={{ headerShown: false }}/>

<Stack.Screen name="panqueca_maca" component={Panqueca_maca} options={{ headerShown: false }}/>

<Stack.Screen name="pao" component={Pao} options={{ headerShown: false }}/>

<Stack.Screen name="papinha" component={Papinha} options={{ headerShown: false }}/>

<Stack.Screen name="sopa" component={Sopa} options={{ headerShown: false }}/>



<Stack.Screen name="pascoa" component={Pascoa} options={{ headerShown: false }}/>

<Stack.Screen name="peixe" component={Peixe} options={{ headerShown: false }}/>

<Stack.Screen name="bacalhau" component={Bacalhau} options={{ headerShown: false }}/>

<Stack.Screen name="ovo_choco" component={Ovo_choco} options={{ headerShown: false }}/>

<Stack.Screen name="coelho_choco" component={Coelho_choco} options={{ headerShown: false }}/>

<Stack.Screen name="cuscuz2" component={Cuscuz2} options={{ headerShown: false }}/>
         
<Stack.Screen name="bobo" component={Bobo} options={{ headerShown: false }}/>


<Stack.Screen name="aniversario" component={Aniversario} options={{ headerShown: false }}/>

<Stack.Screen name="beijinho" component={Beijinho} options={{ headerShown: false }}/>

<Stack.Screen name="brigadeiro2" component={Brigadeiro2} options={{ headerShown: false }}/>

<Stack.Screen name="coxinha2" component={Coxinha2} options={{ headerShown: false }}/>

<Stack.Screen name="bolochoco2" component={Bolochoco2} options={{ headerShown: false }}/>

<Stack.Screen name="nachos" component={Nachos} options={{ headerShown: false }}/>

<Stack.Screen name="dadinho" component={Dadinho} options={{ headerShown: false }}/>


<Stack.Screen name="kids2" component={Kids2} options={{ headerShown: false }}/>

<Stack.Screen name="bebidas" component={Bebidas} options={{ headerShown: false }}/>

<Stack.Screen name="dietas" component={Dietas} options={{ headerShown: false }}/>

<Stack.Screen name="restricao" component={Restricao} options={{ headerShown: false }}/>




<Stack.Screen name="cha" component={Cha} options={{ headerShown: false }}/>

<Stack.Screen name="margarida" component={Margarida} options={{ headerShown: false }}/>

<Stack.Screen name="macha" component={Macha} options={{ headerShown: false }}/>

<Stack.Screen name="laranja_cha" component={Laranja_cha} options={{ headerShown: false }}/>

<Stack.Screen name="gengibre" component={Gengibre} options={{ headerShown: false }}/>

<Stack.Screen name="canela" component={Canela} options={{ headerShown: false }}/>

<Stack.Screen name="hibisco" component={Hibisco} options={{ headerShown: false }}/>




<Stack.Screen name="lactose" component={Lactose} options={{ headerShown: false }}/>

<Stack.Screen name="pao_lactose" component={Pao_lactose} options={{ headerShown: false }}/>

<Stack.Screen name="cookies_lactose" component={Cookies_lactose} options={{ headerShown: false }}/>

<Stack.Screen name="brigadeiro_lactose" component={Brigadeiro_lactose} options={{ headerShown: false }}/>

<Stack.Screen name="bolo_lactose" component={Bolo_lactose} options={{ headerShown: false }}/>

<Stack.Screen name="chips_lactose" component={Chips_lactose} options={{ headerShown: false }}/>

<Stack.Screen name="churros" component={Churros} options={{ headerShown: false }}/>




<Stack.Screen name="gluten" component={Gluten} options={{ headerShown: false }}/>


<Stack.Screen name="bolo_gluten" component={Bolo_gluten} options={{ headerShown: false }}/>

<Stack.Screen name="sanduiche_gluten" component={Sanduiche_gluten} options={{ headerShown: false }}/>

<Stack.Screen name="brownie_gluten" component={Brownie_gluten} options={{ headerShown: false }}/>

<Stack.Screen name="doritos_gluten" component={Doritos_gluten} options={{ headerShown: false }}/>

<Stack.Screen name="pastel_gluten" component={Pastel_gluten} options={{ headerShown: false }}/>

<Stack.Screen name="pizza_gluten" component={Pizza_gluten} options={{ headerShown: false }}/>




<Stack.Screen name="diabetes" component={Diabetes} options={{ headerShown: false }}/>


<Stack.Screen name="torta3" component={Torta3} options={{ headerShown: false }}/>

<Stack.Screen name="salada2" component={Salada2} options={{ headerShown: false }}/>

<Stack.Screen name="palitos" component={Palitos} options={{ headerShown: false }}/>

<Stack.Screen name="cheesecake" component={Cheesecake} options={{ headerShown: false }}/>

<Stack.Screen name="quibe" component={Quibe} options={{ headerShown: false }}/>

<Stack.Screen name="salmao" component={Salmao} options={{ headerShown: false }}/>


<Stack.Screen name="vitaminas" component={Vitaminas} options={{ headerShown: false }}/>

<Stack.Screen name="vitamina_morango" component={Vitamina_morango} options={{ headerShown: false }}/>

<Stack.Screen name="vitamina_melancia" component={Vitamina_melancia} options={{ headerShown: false }}/>

<Stack.Screen name="vitamina_maca" component={Vitamina_maca} options={{ headerShown: false }}/>

<Stack.Screen name="vitamina_mamao" component={Vitamina_mamao} options={{ headerShown: false }}/>

<Stack.Screen name="vitamina_acai" component={Vitamina_acai} options={{ headerShown: false }}/>

<Stack.Screen name="vitamina_banana" component={Vitamina_banana} options={{ headerShown: false }}/>


<Stack.Screen name="halloween" component={Halloween} options={{ headerShown: false }}/>

<Stack.Screen name="dedo" component={Dedo} options={{ headerShown: false }}/>

<Stack.Screen name="olho" component={Olho} options={{ headerShown: false }}/>

<Stack.Screen name="caveira" component={Caveira} options={{ headerShown: false }}/>

<Stack.Screen name="bolinhoo" component={Bolinhoo} options={{ headerShown: false }}/>

<Stack.Screen name="pudim_sangue" component={Pudim_sangue} options={{ headerShown: false }}/>

<Stack.Screen name="minhoca" component={Minhoca} options={{ headerShown: false }}/>


<Stack.Screen name="ano_novo" component={Ano_novo} options={{ headerShown: false }}/>

<Stack.Screen name="farofabacon" component={Farofabacon} options={{ headerShown: false }}/>

<Stack.Screen name="saladabatata" component={Saladabatata} options={{ headerShown: false }}/>

<Stack.Screen name="frutas" component={Frutas} options={{ headerShown: false }}/>

<Stack.Screen name="risoto" component={Risoto} options={{ headerShown: false }}/>

<Stack.Screen name="lombo" component={Lombo} options={{ headerShown: false }}/>

<Stack.Screen name="coxa" component={Coxa} options={{ headerShown: false }}/>



<Stack.Screen name="festa" component={Festa} options={{ headerShown: false }}/>

<Stack.Screen name="espetinho" component={Espetinho} options={{ headerShown: false }}/>

<Stack.Screen name="tartare" component={Tartare} options={{ headerShown: false }}/>

<Stack.Screen name="queijo_festa" component={Queijo_festa} options={{ headerShown: false }}/>

<Stack.Screen name="espetinho_camarao" component={Espetinho_camarao} options={{ headerShown: false }}/>

<Stack.Screen name="ostras" component={Ostras} options={{ headerShown: false }}/>

<Stack.Screen name="canapes" component={Canapes} options={{ headerShown: false }}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}