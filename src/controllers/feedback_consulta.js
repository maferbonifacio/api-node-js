const db = require('../dataBase/connection'); 

module.exports = {
    async listarFeedback_consulta(request, response) {
        try {

            const sql = `
            SELECT fdbk_id, psi_id, usu_id, fdbk_mensagem, 
            fdbk_data_hora 
            FROM feedback_consulta;
            `;

            const [rows] = await db.query(sql);
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de feedback_consulta',
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
    async cadastrarFeedback_consulta(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de feedback_consulta', 
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
    async editarFeedback_consulta(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de feedback_consulta', 
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
    async apagarFeedback_consulta(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de feedback_consulta', 
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