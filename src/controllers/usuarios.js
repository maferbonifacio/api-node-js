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
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de usuário', 
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
    async apagarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de usuário', 
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