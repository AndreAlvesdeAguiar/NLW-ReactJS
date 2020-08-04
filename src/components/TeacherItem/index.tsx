import React from 'react';

import WhatsaapIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://conteudo.imguol.com.br/c/entretenimento/59/2019/10/23/homem-tem-perfil-exigente-no-tinder-deu-match-1571855411743_v2_450x600.jpg" alt="um cara ai"/>
                <div>
                    <strong>Cara A</strong>
                    <span>Materia X</span>
                </div>
            </header>

            <p>xxxxxxxxxxxxxxxxxxxxx
                < br /> < br />
            xxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsaapIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;