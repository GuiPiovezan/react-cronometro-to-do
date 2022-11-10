import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface ListaProps {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista(props: ListaProps) {
    const {tarefas, selecionaTarefa } = props;
    return (
        <aside className={style.listaTarefas} >
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map((item) => {
                        return (
                            <Item 
                                selecionaTarefa={selecionaTarefa}
                                key={item.id}
                                {...item}
                            />
                            // ou
                            // <Item 
                            //     tarefa={item.tarefa}
                            //     tempo={item.tempo}
                            // />
                        );
                    })
                }
            </ul>
        </aside>
    )
}

export default Lista;