import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string | null;
  gdc?: string;
  qualifications?: string;
  bio: string;
}

const dentists: TeamMember[] = [
  {
    name: "Gareth Small",
    role: "Practice Owner / Principal Dentist",
    image: "/helens-bay-dental-practice/images/gareth.jpg",
    gdc: "64423",
    qualifications: "BDS (QUB) 1989",
    bio: "Gareth purchased Helens Bay Dental in 1994 and introduced dental implants in 2000. He has pioneered digital workflows including intra-oral scanners, digital X-ray, and CBCT scanning.",
  },
  {
    name: "Sarah Lochhead",
    role: "Dentist",
    image: "/helens-bay-dental-practice/images/sarah.jpg",
    gdc: "72088",
    qualifications: "BDS (Dundee) 1996",
    bio: "Sarah joined in 2004 with a special interest in cosmetic dentistry. She is an experienced Invisalign Silver provider and Six Month Smiles practitioner.",
  },
  {
    name: "Edward Small",
    role: "Dentist",
    image: "/helens-bay-dental-practice/images/edward.jpg",
    gdc: "296247",
    qualifications: "BDS Manchester 2021",
    bio: "Edward graduated from the University of Manchester and brings fresh expertise to the team.",
  },
  {
    name: "Dr Laura Flinn",
    role: "Dentist — Oral Surgery",
    image: "/helens-bay-dental-practice/images/laura.jpg",
    gdc: "192268",
    qualifications: "BDS Newcastle 2010",
    bio: "Laura has over 10 years of experience in oral and maxillofacial surgery. She holds a Diploma in Conscious Sedation and provides dental extractions in a relaxed environment.",
  },
  {
    name: "Mark Kennedy",
    role: "Dentist — Endodontics",
    image: "/helens-bay-dental-practice/images/mark.jpg",
    gdc: "264806",
    qualifications: "BDS (QUB) 2016",
    bio: "Mark is completing his Masters in Endodontics at King's University London. He specialises in complex root canal treatments using a microscope.",
  },
  {
    name: "Lidia Feritto",
    role: "Periodontist",
    image: "/helens-bay-dental-practice/images/lidia.jpg",
    gdc: "62915",
    qualifications: "BDS (Lond) 1987, MSc (Lond) 1992",
    bio: "Lidia has specialist registration in periodontology, is a Fellow of the Straumann Institute, and lectures across the UK and Ireland on implantology.",
  },
];

const clinicalTeam: TeamMember[] = [
  {
    name: "Gill Lemon",
    role: "Dental Therapist",
    image: "/helens-bay-dental-practice/images/gill.jpg",
    gdc: "191885",
    bio: "Gill joined in 2021 with 12 years of hygienist experience. She is praised for her deep cleaning and friendly demeanour.",
  },
  {
    name: "Emily Small",
    role: "Dental Therapist",
    image: "/helens-bay-dental-practice/images/emily.jpg",
    gdc: "281101",
    bio: "Emily qualified from Queen Mary University London in 2018 and is currently expanding her knowledge in aesthetic dentistry.",
  },
  {
    name: "Lorraine Huyton",
    role: "Hygienist",
    image: "/helens-bay-dental-practice/images/lorraine.jpg",
    bio: "Lorraine provides professional hygiene services using the latest Guided Biofilm Therapy techniques.",
  },
];

const supportTeam: TeamMember[] = [
  {
    name: "Amanda",
    role: "Practice Manager",
    image: "/helens-bay-dental-practice/images/amanda.jpg",
    bio: "Amanda has been Practice Manager since 2001 and ensures the best possible patient experience with the latest technology and ideas.",
  },
  {
    name: "Luke Shannon",
    role: "Compliance & Operations",
    image: "/helens-bay-dental-practice/images/luke.jpg",
    bio: "Luke joined in 2023 with 12 years of management experience, maintaining equipment and sterilisation for a smooth environment.",
  },
  {
    name: "Beata Maciejewska",
    role: "Dental Nurse Lead",
    image: "/helens-bay-dental-practice/images/beata.jpg",
    gdc: "161468",
    bio: "Beata joined in 2006 with a keen interest in dental implants. She supervises various elements of the practice and supports the dental team.",
  },
  {
    name: "Glenda McAllister",
    role: "Treatment Coordinator",
    image: "/helens-bay-dental-practice/images/glenda.jpg",
    gdc: "132406",
    bio: "Glenda has over 30 years of dental nursing experience. She guides patients through their journey, providing support and information.",
  },
  {
    name: "Victoria Cahalan",
    role: "New Patient Coordinator",
    image: "/helens-bay-dental-practice/images/victoria.jpg",
    bio: "Victoria is the first point of contact for new patients, guiding them through enquiries and arranging consultations.",
  },
  {
    name: "Shelley Dawson",
    role: "Dental Nurse",
    image: "/helens-bay-dental-practice/images/shelley.jpg",
    gdc: "254910",
    bio: "Shelley has qualifications in impression taking, implants and radiography. She also serves as a treatment coordinator.",
  },
  {
    name: "Louise Parsons",
    role: "Dental Nurse",
    image: "/helens-bay-dental-practice/images/louise.jpg",
    gdc: "242516",
    bio: "Louise has additional training in dental photography and is training to become a treatment coordinator.",
  },
];

// Members without photos get initials avatar
const noPhotoMembers = [
  { name: "Judit Terron", role: "Dental Nurse" },
  { name: "Lucy Murray", role: "Trainee Dental Nurse" },
  { name: "Georgia Gilmore", role: "Receptionist" },
  { name: "Brooke Nixon", role: "Receptionist" },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700">
            <span className="text-5xl font-bold text-white/80">
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
        <p className="text-sm text-teal-600 font-medium">{member.role}</p>
        {member.qualifications && (
          <p className="mt-1 text-xs text-gray-400">{member.qualifications}</p>
        )}
        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">{member.bio}</p>
        {member.gdc && (
          <p className="mt-2 text-xs text-gray-400">
            GDC: {member.gdc}
          </p>
        )}
      </div>
    </div>
  );
}

function InitialsCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-2xl bg-white overflow-hidden shadow-md border border-gray-100">
      <div className="relative aspect-square overflow-hidden">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700">
          <span className="text-5xl font-bold text-white/80">{getInitials(name)}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-teal-600 font-medium">{role}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Meet the Helens Bay Dental Team
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our dedicated team of dental professionals are progressive and enthusiastic in their
            approach to modern dentistry.
          </p>
        </div>

        {/* Dentists */}
        <h3 className="text-xl font-bold text-gray-800 mb-6">Dentists & Specialists</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {dentists.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>

        {/* Clinical Team */}
        <h3 className="text-xl font-bold text-gray-800 mb-6">Clinical Team</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {clinicalTeam.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>

        {/* Support Team */}
        <h3 className="text-xl font-bold text-gray-800 mb-6">Support Team</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-14">
          {supportTeam.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>

        {/* No-photo members */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {noPhotoMembers.map((m, i) => (
            <InitialsCard key={i} name={m.name} role={m.role} />
          ))}
        </div>
      </div>
    </section>
  );
}
