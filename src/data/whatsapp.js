export const WHATSAPP_NUMBER = "2348134473169";

export const whatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const enquiryMessage = (collection, look) =>
  look
    ? `Hi, I'm interested in ${look} from the ${collection} collection.`
    : `Hi, I'm interested in the ${collection} collection.`;
