type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `contact: ${params.id}`,
  };
}

function ContactListPage({ params }: Props) {
  return <div>List Page {params.id}</div>;
}

export default ContactListPage;
