import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ScrollView} from 'react-native';


export default function App() {
  const [pagina, setPagina] = useState('home');
  return (
    <><SafeAreaView style={styles.container}>
      <Header pagina={pagina} setPagina={setPagina} />
      <ScrollView contentContainerStyle={styles.content}>
        {pagina === 'home' && <Home />}
        {pagina === 'sobre' && <Sobre />}
        {pagina === 'servicos' && <Servicos />}
        {pagina === 'contato' && <Contato />}

      </ScrollView>
    </SafeAreaView><Footer /></>
  )
}

function Header({pagina, setPagina}) {
  return (
  <View style={styles.header}>
    <Text style={styles.texto}>GOAL & SPIKE</Text>
    <View style={styles.nav}>
      {['home', 'sobre', 'servicos', 'contato'].map((p)=>(
        <TouchableOpacity 
        key={p} 
        style={[styles.navButton, pagina === p && styles.navButtonActive]}
        onPress={()=>setPagina(p)}>
        <Text style={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </View>
  )
}

function Home() {
  return (
    <View style={styles.section}>
      <Text style={styles.Title}>Bem-vindo ao Goal & Spike</Text>
      <Text>Na Goal & Spike, acreditamos que o esporte vai muito além das quadras e dos campos — ele é emoção, identidade e paixão. Nossa missão é aproximar torcedores de seus ídolos, oferecendo produtos oficiais e autografados que carregam histórias e conquistas inesquecíveis.</Text>
    </View>
  )
}

function Sobre() {
  return (
    <View style={styles.section}>
      <Text style={styles.Title}>Sobre</Text>
      <Text>Mais do que uma loja, somos uma comunidade para fãs de futebol e vôlei que buscam autenticidade e exclusividade. Cada item da Goal & Spike é acompanhado de certificado de autenticidade e pensado para transformar o amor pelo esporte em uma experiência única.</Text>
    </View>
  )
}

function Servicos() {
  return (
    <View style={styles.section}>
      <Text style={styles.Title}>Nossos Serviços</Text>
      <Text>Venda de produtos exclusivos</Text>
      <Text>Edições limitadas colecionáveis</Text>
      <Text>Certificação de autenticidade</Text>
      <Text>Atendimento ao cliente</Text>
    </View>
  )
}

function Contato() {
 const [nome, setNome] = React.useState('');
 const [email, setEmail] = React.useState('');
 const [mensagem, setMensagem] = React.useState('');
 function enviar(){
  if (!nome || !email || !mensagem){
    Alert.alert ('Erro', 'Por favor, preencha todos os campos');
    return;
  }
  Alert.alert('Sucesso', `Obrigado, ${nome}! Retornaremos em breve`);
  setNome('');
  setEmail('');
  setMensagem('');
 }
 return (
  <View style={styles.section}>
    <Text style={styles.Title}>Contato</Text>
    <TextInput
      placeholder="Nome"
      value={nome}
      onChangeText={setNome}
      style={styles.input}
    />
    <TextInput
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      style={styles.input}
      keyboardType="email-address"
    />
    <TextInput
      placeholder="Mensagem"
      value={mensagem}
      onChangeText={setMensagem}
      style={[styles.input, {height: 100}]}
      multiline
    />
    <TouchableOpacity style={styles.button} onPress={enviar}>
      <Text style={styles.buttonText}>Enviar</Text>
    </TouchableOpacity>
  </View>
);
}


function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{color: 'white'}}>© 2023 Goal & Spike. Todos os direitos reservados.</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#f4f7fa'},

  header: {backgroundColor: '#004080',padding: 40,alignItems: 'center', alignContent: 'center'},

  hederTittle: {color: 'white',fontSize: 24,fontWeight: 'bold',marginBottom: 12},

  nav: {flexDirection: 'row',justifyContent: 'space-around'},

  navButton: {paddingVertical: 8,paddingHorizontal: 12,borderRadius: 4},

  navButtonActive: {backgroundColor: '#0066cc'},

  navButtonText: {color: 'white', fontWeight: 'bold'},

  section: { marginBottom: 16},

  Title: {fontSize: 20,fontWeight: 'bold',marginBottom: 10},

  input: {backgroundColor: 'white',borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 10, paddingVertical:8, borderRadius: 4, marginBottom: 15},

  button: {backgroundColor: '#004080',paddingVertical: 12,alignItems: 'center',borderRadius: 6},

  buttonText: {color: 'white',fontSize: 16,fontWeight: 'bold'},

  footer: {backgroundColor: '#00264d',padding: 15,alignItems: 'center', position: 'absolute', bottom: 0, left: 0, right: 0},
});