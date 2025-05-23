const db = require('../dataBase/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {

            const sql = `
                SELECT
                usu_id, usu_nome, usu_email,
                usu_telefone, usu_senha, usu_data_nascimento,
                usu_cpf, usu_tipo 
                FROM usuarios;
            `;

            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários', 
                itens: rows.length,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarUsuarios(request, response) {
        try {

            const { nome, email, telefone, senha, data_nascimento, cpf, tipo } = request.body;
      
            const sql = `
            INSERT INTO usuarios
             (usu_nome, usu_email, usu_telefone, usu_senha, usu_data_nascimento, usu_cpf, usu_tipo) 
             VALUES
                (?, ?, ?, ?, ?, ?, ?);
             `;

             const values = [nome, email, telefone, senha, data_nascimento, cpf, tipo];

             const [result] = await db.query(sql, values);

             const dados = {
                usu_id: result.insertId,
                nome,
                email,
                tipo
             };

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuários', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    },
    async editarUsuarios(request, response) {
        try {

            const { nome, email, telefone, senha, data_nascimento, cpf, tipo } = request.body;

            const { usu_id } = request.params;

            const sql = `
            UPDATE usuarios SET
             usu_nome = ?, usu_email = ?, usu_telefone = ?, usu_senha = ?, usu_data_nascimento = ?, usu_cpf = ?, usu_tipo = ? 
            WHERE
                usu_id = ?;
             `;

             const values = [ nome, email, telefone, senha, data_nascimento, cpf, tipo, usu_id ];

             const [result] = await db.query(sql, values);

             if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Usuário ${usu_id} não encontrado!`,
                    dados: null
                });
             }

             const dados = {
                usu_id,
                nome,
                email,
                tipo
             };

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Usuário ${usu_id} atualizado com sucesso!`, 
                dados
            });

        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarUsuarios(request, response) {
        try {

            const { usu_id } = request.params;

            const sql = `DELETE FROM usuarios WHERE usu_id = ?`;

            const values = [usu_id];

            const [result] = await db.query(sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Usuário ${usu_id} não encontrado!`,
                    dados: null
                });
             }

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Usuário ${usu_id} excluído com sucesso!`, 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  