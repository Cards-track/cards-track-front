"use client";

import { useParams } from "next/navigation";

export default function CardDetailPage() {
  const { id } = useParams();

  // if (isLoading) return <div>Chargement...</div>;
  // if (error) return <div>Erreur de chargement</div>;
  // if (!card) return <div>Carte non trouvée</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        Ma super carte : {id}
      </div>
    </div>
  );
}
