import { query } from 'express';
import { conexao } from './connection.js';


export default async function inserir(agenda){
    const comando = 
    `   insert into tb_agenda ( nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
        values( ?, ?, ?, ?, ?)`

    let [info] = await conexao.query( comando, 
        [   agenda.nome, 
            agenda.fone, 
            agenda.email, 
            agenda.finalizado, 
            agenda.cadastro     ]);

    agenda.id = info.insertID;
    return agenda

    
}

export default async function alterar( id, agenda){
    const comando = 
        `   update tb_agenda set 
            nm_contato = ?,
            ds_telefone = ?,
            ds_email = ?,
            bt_favorito = ?,
            dt_cadstro = ?
            where id_contato = ?;`

            let [info] = await conexao.query( comando, 
                [   agenda.nome, 
                    agenda.fone, 
                    agenda.email, 
                    agenda.finalizado, 
                    agenda.cadastro,
                    id     ]);

    let linhas = info.affectedRows;
    return linhas
} 

export default async function deletar( id){
    const comando = 
    `delete from tb_agenda 
    where id_contato = ?;`;

    let [info] = await conexao.query( comando , [id]);

    let linhas = info.affectedRows;
    return linhas
}

export default async function consultar( agenda){
    const comando = 
    `select     id_contato as id,
                nm_contato as nome,
                ds_telefone as fone,
                ds_email as email,
                bt_favorito as favs,
                dt_cadastro as inscricao
    from        tb_agenda;`


    let [dados] = await conexao.query( comando );
    return dados;

}