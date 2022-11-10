import React, { useState } from 'react';
import { Cronometro } from '../components/Cronometro';
import FormComponent from '../components/Formulario';
import ListComponent from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefas => tarefas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })))
  }

  function finalizarTarefa() {
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true,
          }
        }

        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <FormComponent setTarefas={setTarefas}/>
      <ListComponent tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro 
        selecionado={selecionado} 
        finalizarTarefa={finalizarTarefa} 
      />
    </div>
  );
}

export default App;
