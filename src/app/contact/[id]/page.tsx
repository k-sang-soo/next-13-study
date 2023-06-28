type Props = {
  params: {
    id: string;
  };
};

function ContactListPage({ params }: Props) {
  return <div>List Page {params.id}</div>;
}

export default ContactListPage;
