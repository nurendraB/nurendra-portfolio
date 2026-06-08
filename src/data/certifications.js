import arcx from "../assets/certs/arcx.jpeg";
import cisco from "../assets/certs/cisco.jpeg";
import coursera from "../assets/certs/coursera.jpeg";
import cybrary from "../assets/certs/cybrary.jpeg";
import eccouncil from "../assets/certs/Ec-Council.jpeg";
import hackerrank from "../assets/certs/hackerrank.jpeg";
import qualys from "../assets/certs/qualys.jpeg";
import redTeamLeaders from "../assets/certs/red_team_leaders.jpeg";
import secops from "../assets/certs/secops_group_logo.jpeg";
import tryhackme from "../assets/certs/tryhackme.jpeg";
import udemy from "../assets/certs/udemy.jpeg";
import upgrad from "../assets/certs/upgrad_campus.jpeg";

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH v12 Master)",
    issuer: "EC-Council",
    logo: eccouncil,
    link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=kINaSWkvawHmYvYcH1pPMvJy3hpwh7S/6VcdNFSGBiM=",
    featured: true,
  },

  {
    title: "Certified AppSec Practitioner",
    issuer: "The SecOps Group",
    logo: secops,
    link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXUamr//pZgXLw4H4wf717RJonRa+KK61/zWo2N9X9ooNDnIcBg4vcJCsVRnnTIpOvQBiFwmMBeoI0bVgP8FhUsQ=",
    featured: true,
  },

  {
    title: "Certified Network Security Practitioner",
    issuer: "The SecOps Group",
    logo: secops,
    link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXUrR1lQdzkwPddIwZ2/SUpiw9FZ5MuvSk2e1asYYSlh1YwCngjEe3aMISjFlUVOgifDv8mdr9Ixv5feVEXeZQos=",
    featured: true,
  },

  {
    title: "Vulnerability Management Detection and Response",
    issuer: "Qualys",
    logo: qualys,
    link: "https://media.licdn.com/dms/image/v2/D562DAQFa3ySPivuGLQ/profile-treasury-document-cover-images_1280/B56Z4ZCu8PIoBA-/0/1778536608539?e=1781478000&v=beta&t=qmGgNaE31U0pH-rHj8HNuuYmDfJ9wKg1GSMtuHIVGJo",
    featured: true,
  },

  {
    title: "Jr Penetration Tester",
    issuer: "TryHackMe",
    logo: tryhackme,
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-LH44RQYH2S.png",
    featured: true,
  },

  {
    title: "Cyber Incident Response Specialization",
    issuer: "Infosec via Coursera",
    logo: coursera,
    link: "https://www.coursera.org/account/accomplishments/specialization/SRHCQPCQXP3C#",
    featured: true,
  },

  {
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    logo: cisco,
    link: "https://www.credly.com/badges/15ec47a7-209e-4971-bc01-4f0afa43d8a5",
  },

  {
    title: "Foundation Level Threat Intelligence Analyst",
    issuer: "arcX",
    logo: arcx,
    link: "https://arcx.io/verify-certificate?id=ebc39f2fa2fc97b8e4ca112756aff1a509c26fad&k=aa9ca54404144fe9a232d51a7a9ab721",
  },

  {
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    issuer: "Red Team Leaders",
    logo: redTeamLeaders,
    link: "https://courses.redteamleaders.com/exam-completion/2221a6e344ce4aff",
  },

  {
    title: "SOC Analyst",
    issuer: "Cybrary",
    logo: cybrary,
    link: "https://app.cybrary.it/profile/Nurendra_Bhandarigal58?tab=cert-completion&cert=CC-6b853189-b028-4513-96dd-0c6a393244a0",
  },

  {
    title: "Offensive Penetration Testing",
    issuer: "Cybrary",
    logo: cybrary,
    link: "https://app.cybrary.it/profile/Nurendra_Bhandarigal58?tab=cert-completion&cert=CC-e6b376d6-aa47-4792-99c8-3350698da2f3",
  },

  {
    title: "Computer Hacking & Forensics",
    issuer: "Cybrary",
    logo: cybrary,
    link: "https://app.cybrary.it/courses/api/certificate/CC-6e81aebe-b84f-46df-8182-c2e7a3b8f0b3/view",
  },

  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    logo: hackerrank,
    link: "https://www.hackerrank.com/certificates/fa60083fe863",
  },

  {
    title: "Full Stack Development Advanced Frontend using React",
    issuer: "upGrad Campus",
    logo: upgrad,
    link: "https://certificate.givemycertificate.com/c/3d47c072-c819-4926-bcd6-abefdf884edc",
  },

  {
    title: "Java Programming",
    issuer: "Udemy",
    logo: udemy,
    link: "https://www.udemy.com/certificate/UC-09bb9243-eefa-4dff-b8c2-ef3d642f5480/",
  },
];

export default certifications;