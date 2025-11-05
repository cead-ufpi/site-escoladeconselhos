import React from 'react';
import { WhatsAppIcon } from './Icons';

export const ContactSection = () => {
  return (
    <footer id="contact" className="bg-text-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">Quer Saber Mais? Estamos aqui para ajudar!</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Se você tem dúvidas, sugestões ou precisa de mais informações, não hesite em entrar em contato conosco.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                 <div className="flex-shrink-0">
                    <a href="#home" className="text-2xl font-bold text-white">
                    Logo Escola
                    </a>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-2">Endereço</h4>
                    <p className="text-gray-300">Rua Exemplo, 123 - Centro<br/>Teresina, PI - CEP 64000-000</p>
                </div>
                 <div>
                    <h4 className="font-bold text-lg mb-2">Contato</h4>
                    <p className="text-gray-300">Telefone: (86) 99999-9999</p>
                     <p className="text-gray-300">
                        E-mail: <a href="mailto:contato@escoladeconselhos.pi.gov.br" className="text-accent hover:underline">contato@escoladeconselhos.pi.gov.br</a>
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6">
                <p className="text-lg text-center">Fale conosco diretamente pelo WhatsApp!</p>
                <a
                    href="https://wa.me/5586999999999" // TODO: Add real WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-600 transition-colors duration-300 shadow-lg"
                >
                    <WhatsAppIcon className="w-8 h-8"/>
                    <span>Entrar em contato</span>
                </a>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Escola de Conselhos Tutelares do Piauí. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
