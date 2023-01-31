-- CreateTable
CREATE TABLE "Entreprise" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "lieu" TEXT,
    "contact" TEXT,
    "date" TEXT,
    "region" TEXT,
    "ville" TEXT,
    "commune" TEXT,
    "chriffre_daffaire" TEXT,
    "forme_juridique" TEXT,
    "secteur" TEXT,
    "activite" TEXT,
    "documemts_legaux" TEXT,
    "regime" TEXT,
    "employes_totaux" TEXT,
    "femmes" TEXT,
    "hommes" TEXT,
    "information" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entreprise_pkey" PRIMARY KEY ("id")
);
