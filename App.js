// Autor: Deury De La Cruz - Matrícula: 2023 2022
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

// ---------- VISTA 1: Presentación ----------
function Presentacion() {
  return (
    <View style={s.centro}>
      <Image source={require('./assets/yo.png')} style={s.foto} />
      <Text style={s.titulo}>Deury</Text>
      <Text style={s.subtitulo}>De La Cruz</Text>
      <Text style={s.subtitulo}>Matricula: 2023 2022</Text>
    </View>
  );
}

// ---------- VISTA 2: Tabla del 1 al 14 ----------
function Tabla() {
  const [numero, setNumero] = useState('');
  const [filas, setFilas] = useState([]);

  const generar = () => {
    const n = parseFloat(numero);
    if (isNaN(n)) return;
    const lista = [];
    for (let i = 1; i <= 14; i++) {
      lista.push(`${n} x ${i} = ${n * i}`);
    }
    setFilas(lista);
  };

  return (
    <View style={s.pantalla}>
      <TextInput style={s.input} placeholder="Número" keyboardType="numeric" value={numero} onChangeText={setNumero} />
      <TouchableOpacity style={s.boton} onPress={generar}>
        <Text style={s.textoBoton}>Generar tabla</Text>
      </TouchableOpacity>
      <ScrollView>
        {filas.map((f, i) => (
          <Text key={i} style={s.fila}>{f}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

// ---------- VISTA 3: Fórmula cuadrática ----------
// Hecho por Deury De La Cruz - Matrícula: 2023 2022
function Formula() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);
    if (isNaN(A) || isNaN(B) || isNaN(C)) return setResultado('Ingresa 3 números válidos');
    if (A === 0) return setResultado('A no puede ser 0');

    const d = B * B - 4 * A * C;
    if (d < 0) return setResultado('No hay soluciones reales');

    const x1 = (-B + Math.sqrt(d)) / (2 * A);
    const x2 = (-B - Math.sqrt(d)) / (2 * A);
    setResultado(`x1 = ${x1}\nx2 = ${x2}`);
  };

  return (
    <View style={s.pantalla}>
      <TextInput style={s.input} placeholder="A" keyboardType="numeric" value={a} onChangeText={setA} />
      <TextInput style={s.input} placeholder="B" keyboardType="numeric" value={b} onChangeText={setB} />
      <TextInput style={s.input} placeholder="C" keyboardType="numeric" value={c} onChangeText={setC} />
      <TouchableOpacity style={s.boton} onPress={calcular}>
        <Text style={s.textoBoton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={s.resultado}>{resultado}</Text>
    </View>
  );
}

// ---------- APP: menú inferior ----------
export default function App() {
  const [vista, setVista] = useState(1);

  return (
    <View style={s.app}>
      <View style={s.contenido}>
        {vista === 1 && <Presentacion />}
        {vista === 2 && <Tabla />}
        {vista === 3 && <Formula />}
      </View>
      <View style={s.menu}>
        <TouchableOpacity onPress={() => setVista(1)}><Text style={s.item}>Perfil</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setVista(2)}><Text style={s.item}>Tabla</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setVista(3)}><Text style={s.item}>Fórmula</Text></TouchableOpacity>
      </View>
    </View>
  );
}

// ---------- ESTILOS ----------
const s = StyleSheet.create({
  app: { flex: 1, paddingTop: 40, backgroundColor: '#fff' },
  contenido: { flex: 1 },
  centro: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  foto: { width: 160, height: 160, borderRadius: 80, marginBottom: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold' },
  subtitulo: { fontSize: 22 },
  pantalla: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 8, padding: 10, marginBottom: 12, fontSize: 16 },
  boton: { backgroundColor: '#3f51b5', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  textoBoton: { color: '#fff', fontSize: 16 },
  fila: { fontSize: 18, paddingVertical: 4 },
  resultado: { fontSize: 22, marginTop: 16 },
  menu: { flexDirection: 'row', justifyContent: 'space-around', padding: 14, borderTopWidth: 1, borderColor: '#ccc' },
  item: { fontSize: 18, color: '#3f51b5' },
});


