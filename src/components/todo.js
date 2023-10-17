import { Task } from "./task"

export function Todo(){
    const tasks = [
        {title:  'Refrigeración del automotor',
         description: 'Consulta, presupuesto y reparacion del ambiente climatico de tu auto.',
         imgUrl: 'https://images.unsplash.com/photo-1542399204-b8dd4af5113d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470'
        },
        {title:  'Sistemas de refrigeracion y aire acondicionado',
         description: 'Instalación, mantenimiento y reparación.',
         imgUrl: 'https://images.unsplash.com/photo-1552853160-8ec65527b252?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470'
        },
        {title:  'Heladeras y Otros Electrodomesticos',
         description: 'Consulta, reparación, compra y venta de Heladeras, cocinas, lavarropas, termotanques, hornos, etc.',
         imgUrl: 'https://images.unsplash.com/photo-1597423498043-8f85e9eb8ade?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374'
        }
    ]
    return(
        <div className="task-list">
            {tasks.map((task)=> {
                return <Task task={task}></Task>
            })}
        </div>
    )
}