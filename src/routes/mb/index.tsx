import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ redirect }) => {
	throw redirect(302, "/whatsapp?source=Maria+Bonita");
};
