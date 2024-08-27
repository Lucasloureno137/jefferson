import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>O que é um Todo List?</h1>
      <p>
        Um Todo List é uma ferramenta usada para ajudar as pessoas a organizar suas tarefas e atividades diárias. Ele permite que você liste todas as tarefas que precisa concluir, priorize-as e marque-as como concluídas à medida que as realiza.
      </p>

      <h2>Como Funciona um Todo List?</h2>
      <p>
        Normalmente, um Todo List funciona de maneira muito simples:
      </p>
      <ol>
        <li><strong>Adicionar Tarefas:</strong> Você começa adicionando tarefas que precisa completar. Cada tarefa é uma linha no seu Todo List.</li>
        <li><strong>Organizar Tarefas:</strong> As tarefas podem ser organizadas por prioridade, data de vencimento, ou qualquer outra categorização que ajude na sua organização.</li>
        <li><strong>Marcar como Concluídas:</strong> À medida que você completa as tarefas, você pode marcá-las como concluídas. Isso ajuda a acompanhar o que já foi feito e o que ainda precisa ser feito.</li>
        <li><strong>Revisar e Atualizar:</strong> A lista pode ser revisada e atualizada a qualquer momento. Novas tarefas podem ser adicionadas, e tarefas concluídas podem ser removidas.</li>
      </ol>
      
      <p>
        Um Todo List pode ser usado tanto em papel quanto digitalmente, com muitos aplicativos e ferramentas online disponíveis para ajudar na organização das tarefas.
      </p>
    </div>
  );
};

export default Home;
