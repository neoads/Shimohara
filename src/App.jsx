import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <h1 className="text-4xl font-bold">Shimohara Administracao e Marketing LTDA</h1>
          <h2 className="text-2xl mb-8">40.689.876/0001-01</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer soluções completas em administração e marketing com qualidade, inovação e transparência, transformando desafios empresariais em oportunidades de crescimento. Com expertise no mercado, buscamos superar as expectativas dos nossos clientes através de um atendimento personalizado, estratégias eficazes e resultados mensuráveis, sempre com comprometimento e excelência. Nossa missão é ajudar empresas a alcançarem seus objetivos, criando valor e construindo relacionamentos duradouros baseados na confiança e no sucesso mútuo."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: lucasshimohara@hotmail.com</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Shimohara Administracao e Marketing LTDA</strong>, registrada sob o CNPJ <strong className="font-bold">40.689.876/0001-01</strong>, foi fundada em <strong className="font-bold">03 de fevereiro de 2021</strong>, na cidade de <strong className="font-bold">São Sebastião, São Paulo</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">administração e marketing empresarial</strong>, oferecendo serviços que unem <strong className="font-bold">estratégia, qualidade e resultados</strong> para transformar negócios e impulsionar o crescimento.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal abrange <strong className="font-bold">consultoria em administração e marketing</strong>, desenvolvendo soluções personalizadas que atendem às necessidades específicas de cada cliente. Com mais de <strong className="font-bold">4 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">abordagem estratégica, metodologia eficaz e atendimento especializado</strong>, sempre buscando superar expectativas e entregar resultados mensuráveis.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada no <strong className="font-bold">bairro Maresias, São Sebastião-SP (CEP 11628-115)</strong>, nossa empresa é referência na região, proporcionando uma experiência de atendimento personalizada e profissional. Valorizamos a <strong className="font-bold">transparência, a inovação e a satisfação do cliente</strong>, garantindo que cada projeto seja executado com excelência e dedicação.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Shimohara Administracao e Marketing LTDA</strong>, acreditamos que <strong className="font-bold">o sucesso empresarial reflete a qualidade das estratégias aplicadas</strong>. Por isso, nosso compromisso vai além da prestação de serviços: queremos ajudar você a criar <strong className="font-bold">resultados únicos, sustentáveis e de alto impacto</strong>, seja no crescimento do seu negócio ou na otimização de processos.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Consultoria em Administração</strong> – Estratégias que combinam <strong className="font-bold">eficiência, organização e resultados</strong>.</li>
            <li><strong className="font-bold">Marketing Digital e Tradicional</strong> – Soluções que amplificam a presença da sua marca no mercado.</li>
            <li><strong className="font-bold">Atendimento Personalizado</strong> – Auxílio na definição das melhores estratégias para seu negócio.</li>
            <li><strong className="font-bold">Qualidade e Agilidade</strong> – Projetos desenvolvidos com precisão e entregues no prazo.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Shimohara Administracao e Marketing LTDA</li>
            <li><strong className="font-bold">CNPJ:</strong> 40.689.876/0001-01</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 03/02/2021</li>
            <li><strong className="font-bold">Tempo de Atividade:</strong> 4 anos, 7 meses e 27 dias</li>
            <li><strong className="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 03/02/2021</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 03/02/2021</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 2.000,00</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Casa 7, Bairro Maresias, São Sebastião-SP, <strong className="font-bold">CEP 11628-115</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg">📧 <strong className="font-bold">E-mail:</strong> <a href="mailto:lucasshimohara@hotmail.com" className="text-blue-500 hover:underline">lucasshimohara@hotmail.com</a></p>
          <p className="text-lg">📧 <strong className="font-bold">E-mail Comercial:</strong> <a href="mailto:contate@corssar.com" className="text-blue-500 hover:underline">contate@corssar.com</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Shimohara Administracao e Marketing LTDA</strong>, estamos prontos para ajudar você a <strong className="font-bold">alcançar os melhores resultados</strong>. Entre em contato e descubra como <strong className="font-bold">estratégias bem aplicadas podem transformar seu negócio!</strong> 🚀✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Shimohara Administracao e Marketing LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 40.689.876/0001-01</p>
          <p className="text-sm"><strong>Razão Social:</strong> Shimohara Administracao e Marketing LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 03/02/2021</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 2.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Casa 7, Bairro Maresias, São Sebastião-SP</p>
          <p className="text-sm"><strong>CEP:</strong> 11628-115</p>
          <p className="text-sm"><strong>E-mail:</strong> lucasshimohara@hotmail.com</p>
          <p className="text-sm"><strong>E-mail Comercial:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Transformando negócios com estratégia e qualidade desde 2021</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Shimohara Administracao e Marketing LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 40.689.876/0001-01</p>
          <p className="text-sm"><strong>Endereço:</strong> Casa 7, Bairro Maresias, São Sebastião-SP, CEP 11628-115</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante consultorias presenciais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou consultorias).</li>
                <li>Informações sobre o negócio e necessidades específicas.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, agendamento de consultorias e acompanhamento de projetos.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de serviços (apenas informações necessárias para execução de projetos).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> lucasshimohara@hotmail.com</li>
            <li><strong className="font-bold">E-mail Comercial:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Shimohara Administracao e Marketing LTDA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
