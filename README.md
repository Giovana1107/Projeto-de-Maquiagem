<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Maquiagem</h1>
    <p>Projeto desenvolvido por Giovanna Imperador</p>
    <nav>
      <ul>
        <li><a href="#tipos">Tipos</a></li>
        <li><a href="#como-usar">Como Usar</a></li>
        <li><a href="#ocasiões">Ocasiões</a></li>
      </ul>
    </nav>
  </header>

  <!-- MENU DE ACESSIBILIDADE -->
  <div id="acessibilidade">
    <button onclick="aumentarFonte()">Aumentar Fonte</button>
    <button onclick="diminuirFonte()">Diminuir Fonte</button>
    <button onclick="mudarFundo()">Mudar Fundo</button>
    <button onclick="alternarContraste()">Contraste</button>
    <button onclick="destacarLinks()">Destacar Links</button>
    <button onclick="resetar()">Resetar</button>
  </div>

  <section id="tipos">
    <h2>Tipos de Maquiagem</h2>
    <ul>
      <li><strong>Maquiagem básica:</strong> usada no dia a dia, leve e natural.</li>
      <li><strong>Maquiagem artística:</strong> ideal para festas temáticas e eventos criativos.</li>
      <li><strong>Maquiagem de festa:</strong> mais marcada, com brilho e cores fortes.</li>
      <li><strong>Maquiagem profissional:</strong> voltada para noivas, eventos e trabalhos específicos.</li>
    </ul>
  </section>

  <section id="como-usar">
    <h2>Como Passar a Maquiagem</h2>
    <p>
      A aplicação da maquiagem deve começar pela preparação da pele: limpeza, hidratação e primer.  
      Em seguida, aplica-se a base e corretivo para uniformizar, depois pó e blush para dar vida.  
      Nos olhos, sombra, delineador e máscara de cílios. Nos lábios, batom ou gloss conforme o estilo.
    </p>
  </section>

  <section id="ocasiões">
    <h2>Onde Usar</h2>
    <p>
      Cada tipo de maquiagem é adequado para diferentes ocasiões.  
      A maquiagem básica é perfeita para o trabalho e o dia a dia.  
      A de festa combina com baladas e casamentos.  
      Já a artística pode ser usada em apresentações, teatro e carnaval.
    </p>
  </section>



  
</body>
</html>
