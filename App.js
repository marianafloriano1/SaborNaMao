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
               

         <Stack.Screen name="almoco_domingo" component={Almoco_domingo} options={{title:'Almoço de Domingo', headerStyle:{backgroundColor:'#ffe697',},headerTitleStyle:{color:'#dfc265', fontWeight:'bold', fontSize:22}, headerTintColor: '#dfc265'}}/>

<Stack.Screen name="feijao" component={Feijao} options={{ headerStyle:{backgroundColor:'#ffe8a0',},headerTitleStyle:{color:'#ffe8a0',fontWeight: 'bold',}}}/>

<Stack.Screen name="paella" component={Paella} options={{ headerStyle:{backgroundColor:'#ffe8a0',},headerTitleStyle:{color:'#ffe8a0',fontWeight: 'bold',}}}/>

<Stack.Screen name="churrasco" component={Churrasco} options={{ headerStyle:{backgroundColor:'#ffe8a0',},headerTitleStyle:{color:'#ffe8a0',fontWeight: 'bold',}}}/>

<Stack.Screen name="frango" component={Frango} options={{ headerStyle:{backgroundColor:'#ffe8a0',},headerTitleStyle:{color:'#ffe8a0',fontWeight: 'bold',}}}/>

<Stack.Screen name="escondidinho" component={Escondidinho} options={{ headerStyle:{backgroundColor:'#ffe8a0',},headerTitleStyle:{color:'#ffe8a0',fontWeight: 'bold',}}}/>

<Stack.Screen name="torta" component={Torta} options={{ headerStyle:{backgroundColor:'#ffe8a0',},headerTitleStyle:{color:'#ffe8a0',fontWeight: 'bold',}}}/>



         <Stack.Screen name="sucos" component={Sucos} options={{title:'Sucos Rápidos e Fáceis', headerStyle:{backgroundColor:'#ffbb8f',},headerTitleStyle:{color:'#d6705d', fontWeight:'bold', fontSize:24}, headerTintColor: '#d6705d'}}/>

<Stack.Screen name="limao" component={Limao} options={{title:'', headerStyle:{backgroundColor:'#ffbb8f',},headerTitleStyle:{color:'#d6705d',fontWeight: 'bold',}, headerTintColor: '#d6705d'}}/>

<Stack.Screen name="melancia" component={Melancia} options={{title:'', headerStyle:{backgroundColor:'#ffbb8f',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#d6705d'}}/>

<Stack.Screen name="morango" component={Morango} options={{title:'', headerStyle:{backgroundColor:'#ffbb8f',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#d6705d'}}/>

<Stack.Screen name="cenoura" component={Cenoura} options={{title:'', headerStyle:{backgroundColor:'#ffbb8f',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#d6705d'}}/>

<Stack.Screen name="verde" component={Verde} options={{title:'', headerStyle:{backgroundColor:'#ffbb8f',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#d6705d'}}/>

<Stack.Screen name="abacaxi" component={Abacaxi} options={{title:'', headerStyle:{backgroundColor:'#ffbb8f',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#d6705d'}}/>



         <Stack.Screen name="vegano" component={Vegano} options={{title:'Receitas Veganas Fáceis', headerStyle:{backgroundColor:'#b5b1cb',},headerTitleStyle:{color:'#6E789C', fontWeight:'bold', fontSize:24}, headerTintColor: '#6E789C'}}/>
<Stack.Screen name="falafel" component={Falafel} options={{title:'', headerStyle:{backgroundColor:'#bbb8cd',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#807b9f'}}/>

<Stack.Screen name="almodegas" component={Almodegas} options={{title:'', headerStyle:{backgroundColor:'#bbb8cd',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#807b9f'}}/>

<Stack.Screen name="bombom" component={BomBom} options={{title:'', headerStyle:{backgroundColor:'#bbb8cd',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#807b9f'}}/>

<Stack.Screen name="nhoque" component={Nhoque} options={{title:'', headerStyle:{backgroundColor:'#bbb8cd',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#807b9f'}}/>

<Stack.Screen name="pao_queijo" component={Pao_Queijo} options={{title:'', headerStyle:{backgroundColor:'#bbb8cd',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#807b9f'}}/>

<Stack.Screen name="cuscuz" component={Cuscuz} options={{title:'', headerStyle:{backgroundColor:'#bbb8cd',},headerTitleStyle:{color:'#807b9f',fontWeight: 'bold',}, headerTintColor: '#807b9f'}}/>



         <Stack.Screen name="ceia_natal" component={Ceia_natal} options={{ title:'Receitas Natalinas', headerStyle:{backgroundColor:'#ffc68f',},headerTitleStyle:{color:'#e48a55', fontWeight:'bold', fontSize:22}, headerTintColor: '#e48a55'}}/>

          <Stack.Screen name="peru" component={Peru} options={{ headerStyle:{backgroundColor:'#ffcb9a',},headerTitleStyle:{color:'#ffcb9a',fontWeight: 'bold',}}}/>

           <Stack.Screen name="salada" component={Salada} options={{ headerStyle:{backgroundColor:'#ffcb9a',},headerTitleStyle:{color:'#ffcb9a',fontWeight: 'bold',}}}/>

            <Stack.Screen name="salpicao" component={Salpicao} options={{ headerStyle:{backgroundColor:'#ffcb9a',},headerTitleStyle:{color:'#ffcb9a',fontWeight: 'bold',}}}/>

             <Stack.Screen name="arroz_natal" component={Arroz_Natal} options={{ headerStyle:{backgroundColor:'#ffcb9a',},headerTitleStyle:{color:'#ffcb9a',fontWeight: 'bold',}}}/>

              <Stack.Screen name="bolinho_arroz" component={Bolinho_Arroz} options={{ headerStyle:{backgroundColor:'#ffcb9a',},headerTitleStyle:{color:'#ffcb9a',fontWeight: 'bold',}}}/>

               <Stack.Screen name="farofa" component={Farofa} options={{ headerStyle:{backgroundColor:'#ffcb9a',},headerTitleStyle:{color:'#ffcb9a',fontWeight: 'bold',}}}/>



         <Stack.Screen name="festa_junina" component={Festa_junina} options={{ title:'Receitas De Festa Junina', headerStyle:{backgroundColor:'#d68f9f',},headerTitleStyle:{color:'#b46375', fontWeight:'bold', fontSize:22}, headerTintColor: '#b46375'}}/>

<Stack.Screen name="pamonha" component={Pamonha} options={{ headerStyle:{backgroundColor:'#d698a6',},headerTitleStyle:{color:'#d698a6',fontWeight: 'bold',}}}/>

<Stack.Screen name="pacoca" component={Pacoca} options={{ headerStyle:{backgroundColor:'#d698a6',},headerTitleStyle:{color:'#d698a6',fontWeight: 'bold',}}}/>

<Stack.Screen name="milho" component={Milho} options={{ headerStyle:{backgroundColor:'#d698a6',},headerTitleStyle:{color:'#d698a6',fontWeight: 'bold',}}}/>

<Stack.Screen name="quentao" component={Quentao} options={{ headerStyle:{backgroundColor:'#d698a6',},headerTitleStyle:{color:'#d698a6',fontWeight: 'bold',}}}/>

<Stack.Screen name="bolo_fuba" component={Bolo_fuba} options={{ headerStyle:{backgroundColor:'#d698a6',},headerTitleStyle:{color:'#d698a6',fontWeight: 'bold',}}}/>

<Stack.Screen name="maca_amor" component={Maca_amor} options={{ headerStyle:{backgroundColor:'#d698a6',},headerTitleStyle:{color:'#d698a6',fontWeight: 'bold',}}}/>


         <Stack.Screen name="kids" component={Kids} options={{title:'Receitas Para Crianças', headerStyle:{backgroundColor:'#bfd8a7',},headerTitleStyle:{color:'#95ad7b', fontWeight:'bold', fontSize:22}, headerTintColor: '#95ad7b'}} />
         
          <Stack.Screen name="bolochoco" component={Bolochoco} options={{ headerStyle:{backgroundColor:'#c6dbb2',},headerTitleStyle:{color:'#c6dbb2',fontWeight: 'bold',}}}/>

          <Stack.Screen name="picole" component={Picole} options={{ headerStyle:{backgroundColor:'#c6dbb2',},headerTitleStyle:{color:'#c6dbb2',fontWeight: 'bold',}}}/>

          <Stack.Screen name="raspadinha" component={Raspadinha} options={{ headerStyle:{backgroundColor:'#c6dbb2',},headerTitleStyle:{color:'#c6dbb2',fontWeight: 'bold',}}}/>

          <Stack.Screen name="pave" component={Pave} options={{ headerStyle:{backgroundColor:'#c6dbb2',},headerTitleStyle:{color:'#c6dbb2',fontWeight: 'bold',}}}/>

          <Stack.Screen name="danone" component={Danone} options={{ headerStyle:{backgroundColor:'#c6dbb2',},headerTitleStyle:{color:'#c6dbb2',fontWeight: 'bold',}}}/>

         <Stack.Screen name="brigadeiro" component={Brigadeiro} options={{ headerStyle:{backgroundColor:'#c6dbb2',},headerTitleStyle:{color:'#c6dbb2',fontWeight: 'bold',}}}/>



         <Stack.Screen name="morando_sozinho" component={Morando_sozinho} options={{title:'Receitas Para Uma Pessoa', headerStyle:{backgroundColor:'#a7bfc8',},headerTitleStyle:{color:'#6E789C', fontWeight:'bold', fontSize:24}, headerTintColor: '#6E789C'}}/>
         
 <Stack.Screen name="arroz" component={Arroz} options={{ headerStyle:{backgroundColor:'#B7C7CD',},headerTitleStyle:{color:'#B7C7CD',fontWeight: 'bold',}}}/>

         <Stack.Screen name="coxinha" component={Coxinha} options={{ headerStyle:{backgroundColor:'#B7C7CD',},headerTitleStyle:{color:'#B7C7CD',fontWeight: 'bold',}}}/>

         <Stack.Screen name="macarrao" component={Macarrao} options={{ headerStyle:{backgroundColor:'#B7C7CD',},headerTitleStyle:{color:'#B7C7CD',fontWeight: 'bold',}}}/>

         <Stack.Screen name="pudim" component={Pudim} options={{ headerStyle:{backgroundColor:'#B7C7CD',},headerTitleStyle:{color:'#B7C7CD',fontWeight: 'bold',}}}/>

         <Stack.Screen name="empadao" component={Empadao} options={{ headerStyle:{backgroundColor:'#B7C7CD',},headerTitleStyle:{color:'#B7C7CD',fontWeight: 'bold',}}}/>

         <Stack.Screen name="panqueca" component={Panqueca} options={{ headerStyle:{backgroundColor:'#B7C7CD',},headerTitleStyle:{color:'#B7C7CD',fontWeight: 'bold',}}}/>


  <Stack.Screen name="noite_garotas" component={Noite_garotas} options={{title:'Comidas de Festas', headerStyle:{backgroundColor:'#FBCBC4',},headerTitleStyle:{color:'#FF8F7E',fontWeight: 'bold', fontSize:24}, headerTintColor: '#FF8F7E'}}/>

    <Stack.Screen name="cookie" component={Cookie} options={{title:'Cookies De Chocolate', headerStyle:{backgroundColor:'#FBCBC4',},headerTitleStyle:{color:'#FBCBC4',fontWeight: 'bold',}}}/>

         <Stack.Screen name="pipoca" component={Pipoca} options={{title:'', headerStyle:{backgroundColor:'#FBCBC4',}}}/>

         <Stack.Screen name="cupcake" component={Cupcake} options={{title:'Cupcake', headerStyle:{backgroundColor:'#FBCBC4',},headerTitleStyle:{color:'#FBCBC4',fontWeight: 'bold',}}}/>

         <Stack.Screen name="pizza" component={Pizza} options={{title:'', headerStyle:{backgroundColor:'#FBCBC4',},headerTitleStyle:{color:'#FF8F7E',fontWeight: 'bold',}}}/>

         <Stack.Screen name="batata" component={Batata} options={{title:'Batata Frita', headerStyle:{backgroundColor:'#FBCBC4',},headerTitleStyle:{color:'#FBCBC4',fontWeight: 'bold',}}}/>

         <Stack.Screen name="hotdog" component={Hotdog} options={{title:'Hotdog', headerStyle:{backgroundColor:'#FBCBC4',},headerTitleStyle:{color:'#FBCBC4',fontWeight: 'bold',}}}/>


<Stack.Screen name="vegetariano" component={Vegetariano} options={{title:'Receitas Vegetarianas', headerStyle:{backgroundColor:'#b59fc8',},headerTitleStyle:{color:'#7d6094', fontWeight:'bold', fontSize:24}, headerTintColor: '#7d6094'}}/>

<Stack.Screen name="quiche" component={Quiche} options={{title:'', headerStyle:{backgroundColor:'#c1b2cd',},headerTitleStyle:{color:'#c1b2cd',fontWeight: 'bold',}}}/>

<Stack.Screen name="lasanha" component={Lasanha} options={{title:'', headerStyle:{backgroundColor:'#c1b2cd',},headerTitleStyle:{color:'#c1b2cd',fontWeight: 'bold',}}}/>

<Stack.Screen name="burguer" component={Burguer} options={{title:'', headerStyle:{backgroundColor:'#c1b2cd',},headerTitleStyle:{color:'#c1b2cd',fontWeight: 'bold',}}}/>

<Stack.Screen name="pasta" component={Pasta} options={{title:'', headerStyle:{backgroundColor:'#c1b2cd',},headerTitleStyle:{color:'#c1b2cd',fontWeight: 'bold',}}}/>

<Stack.Screen name="queijo" component={Queijo} options={{title:'', headerStyle:{backgroundColor:'#c1b2cd',},headerTitleStyle:{color:'#c1b2cd',fontWeight: 'bold',}}}/>

<Stack.Screen name="torta2" component={Torta2} options={{title:'', headerStyle:{backgroundColor:'#c1b2cd',},headerTitleStyle:{color:'#c1b2cd',fontWeight: 'bold',}}}/>




<Stack.Screen name="mamaes" component={Mamaes} options={{title:'Receitas Para Bebês', headerStyle:{backgroundColor:'#b7d4c7',},headerTitleStyle:{color:'#609f84', fontWeight:'bold', fontSize:24}, headerTintColor: '#609f84'}}/>

<Stack.Screen name="macarrao_bebe" component={Macarrao_bebe} options={{title:'', headerStyle:{backgroundColor:'#c1dbcf',},headerTitleStyle:{color:'#c1dbcf',fontWeight: 'bold',}}}/>

<Stack.Screen name="panqueca_banana" component={Panqueca_banana} options={{title:'', headerStyle:{backgroundColor:'#c1dbcf',},headerTitleStyle:{color:'#c1dbcf',fontWeight: 'bold',}}}/>

<Stack.Screen name="panqueca_maca" component={Panqueca_maca} options={{title:'', headerStyle:{backgroundColor:'#c1dbcf',},headerTitleStyle:{color:'#c1dbcf',fontWeight: 'bold',}}}/>

<Stack.Screen name="pao" component={Pao} options={{title:'', headerStyle:{backgroundColor:'#c1dbcf',},headerTitleStyle:{color:'#c1dbcf',fontWeight: 'bold',}}}/>

<Stack.Screen name="papinha" component={Papinha} options={{title:'', headerStyle:{backgroundColor:'#c1dbcf',},headerTitleStyle:{color:'#c1dbcf',fontWeight: 'bold',}}}/>

<Stack.Screen name="sopa" component={Sopa} options={{title:'', headerStyle:{backgroundColor:'#c1dbcf',},headerTitleStyle:{color:'#c1dbcf',fontWeight: 'bold',}}}/>

         
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}