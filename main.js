const speakerdata = [
  {
    name: 'Justine Imasiku',
    image: './images/justin.jpg',
    title: 'Full Stack Student, Microverse',
    desc: 'Justine is a full time student at Microverse, learning Full Stack Web Development.',
  },
  {
    name: 'Chiluba Haciwa',
    image: './images/chiluba.jpg',
    title: 'Full Stack Student, Microverse',
    desc: 'Chiluba is a full time student at Microverse, learning Full Stack Web Development.',
  },
  {
    name: 'Mayumbo Imasiku',
    image: './images/mayumbo.png',
    title: 'Full Stack tudent, Microverse',
    desc: 'Mayumbo is a full time student at Microverse, learning Full Stack Web Development.',
  },
  {
    name: 'Ariel Camus',
    image: './images/ariel.jpg',
    title: 'CEO, Microverse',
    desc: 'Ariel has been coding since he was 12. He previously founded Tourist Eye, a travel app with 1MM+ users acquired by Lonely Planet.',
  },
  {
    name: 'Joseph Ndandula',
    image: './images/jose.png',
    title: 'Full Stack Student, Microverse',
    desc: 'Joseph is a full time student at Dufuna, learning Full Stack Web Development.',
  },
  {
    name: 'Chipo Hameja',
    image: './images/chipo.jpg',
    title: 'Full Stack Student, Dufuna',
    desc: 'Chipo is a full time student at Dufuna, learning Full Stack Web Development.',
  },
];

const speakers = document.querySelector('.SpeakerSection');

// speaker container
const speakersList = document.createElement('ul');
speakersList.className = 'speakerslist';
speakers.appendChild(speakersList);

speakerdata.forEach((speaker) => {
  // speaker card
  const li = document.createElement('li');
  li.className = 'speaker';
  speakersList.appendChild(li);

  const speakerImage = document.createElement('div');
  speakerImage.className = 'speakerimg';
  speakerImage.innerHTML = `<img title='speaker' src=${speaker.image} alt="Featured speaker">`;
  li.appendChild(speakerImage);

  const speakerInfo = document.createElement('div');
  speakerInfo.className = 'speakerinfo';
  li.appendChild(speakerInfo);

  const speakerName = document.createElement('h3');
  speakerName.className = 'speakername';
  speakerName.innerHTML = speaker.name;
  speakerInfo.appendChild(speakerName);

  const speakerTitle = document.createElement('p');
  speakerTitle.className = 'speakertitle';
  speakerTitle.innerHTML = speaker.title;
  speakerInfo.appendChild(speakerTitle);

  const speakerDesc = document.createElement('p');
  speakerDesc.className = 'speakerdesc';
  speakerDesc.innerHTML = speaker.desc;
  speakerInfo.appendChild(speakerDesc);
});

const morespeakers = document.createElement('button');
morespeakers.className = 'morebtn';
morespeakers.type = 'button';
morespeakers.innerHTML = 'SEE MORE <i class="chevron down icon"></i>';
speakers.appendChild(morespeakers);

const speakerCards = Array.from(document.querySelectorAll('.speaker'));

speakerCards.forEach((card, index) => {
  if (index > 1) {
    card.classList.add('hide');
  }
});

const moreBtn = document.querySelector('.morebtn');

const moreBtnText = (card) => {
  if (card.classList.contains('hide')) {
    moreBtn.innerHTML = 'SEE MORE <i class="chevron down icon"></i>';
  } else {
    moreBtn.innerHTML = 'SEE LESS <i class="chevron up icon"></i>';
  }
};

moreBtn.addEventListener('click', () => {
  speakerCards.forEach((card, index) => {
    if (index > 1) {
      card.classList.toggle('hide');
      moreBtnText(card);
    }
  });
});