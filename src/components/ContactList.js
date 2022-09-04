import ContactDetails from './ContactDetails';

const contacts = [
  {
    name: 'Janique Costa',
    avatar: 'https://source.unsplash.com/ZHvM3XIOHoE/400x400',
  },
  {
    name: 'Khaled Borrison',
    avatar: 'https://source.unsplash.com/iEEBWgY_6lA/400x400',
  },
  {
    name: 'Janique Costa',
    avatar: 'https://source.unsplash.com/2EdIX-O2lkI/400x400',
  },
  {
    name: 'Khaled Borrison',
    avatar: 'https://source.unsplash.com/VWAzEW0bi58/400x400',
  },
  {
    name: 'Janique Costa',
    avatar: 'https://source.unsplash.com/7omHUGhhmZ0/400x400',
  },
  {
    name: 'Khaled Borrison',
    avatar: 'https://source.unsplash.com/IF9TK5Uy-KI/400x400',
  },
  {
    name: 'Janique Costa',
    avatar: 'https://source.unsplash.com/7omHUGhhmZ0/400x400',
  },
  {
    name: 'Khaled Borrison',
    avatar: 'https://source.unsplash.com/IF9TK5Uy-KI/400x400',
  },
  {
    name: 'Janique Costa',
    avatar: 'https://source.unsplash.com/7omHUGhhmZ0/400x400',
  },
  {
    name: 'Khaled Borrison',
    avatar: 'https://source.unsplash.com/IF9TK5Uy-KI/400x400',
  },
  {
    name: 'Janique Costa',
    avatar: 'https://source.unsplash.com/7omHUGhhmZ0/400x400',
  },
  {
    name: 'Khaled Borrison',
    avatar: 'https://source.unsplash.com/IF9TK5Uy-KI/400x400',
  },
  {
    name: 'Janique Costa',
    avatar: 'https://source.unsplash.com/7omHUGhhmZ0/400x400',
  },
  {
    name: 'Khaled Borrison',
    avatar: 'https://source.unsplash.com/IF9TK5Uy-KI/400x400',
  },
];

export default function ContactList() {
  return (
    <ul>
      {contacts.map((contact) => {
        return <ContactDetails name={contact.name} avatar={contact.avatar} />;
      })}
    </ul>
  );
}
