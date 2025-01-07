export interface IHarrypotterDetailResponse {
  id: string;
  type: string;
  attributes: {
    alias_names: string[];
    animagus: string | null;
    blood_status: string | null;
    boggart: string | null;
    born: string | null;
    died: string | null;
    eye_color: string | null;
    family_members: string[];
    gender: string;
    hair_color: string | null;
    height: string | null;
    house: string | null;
    image: string | null;
    jobs: string[];
    marital_status: string | null;
    name: string;
    nationality: string | null;
    patronus: string | null;
    romances: string[];
    skin_color: string | null;
    slug: string;
    species: string;
    titles: string[];
    wands: string[];
    weight: string | null;
    wiki: string | null;
  };
  links: {
    self: string;
  };
}
