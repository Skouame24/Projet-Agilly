import Joi from "joi";

export const entrepriseSaveSchema = Joi.object({
  nom: Joi.string().allow("").optional(),
  lieu: Joi.string().allow("").optional(),
  contact: Joi.string().allow("").optional(),
  date: Joi.string().allow("").optional(),
  region : Joi.string().allow("").optional(),
  ville: Joi.string().allow("").optional(),
  commune : Joi.string().allow("").optional(),
  chriffre_daffaire: Joi.string().allow("").optional(),
  forme_juridique: Joi.string().allow("").optional(),
  secteur: Joi.string().allow("").optional(),
  activite: Joi.string().allow("").optional(),
  documemts_legaux: Joi.string().allow("").optional(),
  regime: Joi.string().allow("").optional(),
  employes_totaux: Joi.string().allow("").optional(),
  femmes: Joi.string().allow("").optional(),
  hommes: Joi.string().allow("").optional(),
  information: Joi.string().allow("").optional(),
});
