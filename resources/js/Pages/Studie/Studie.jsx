import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import Opleiding from "@/Layouts/AuthenticatedLayout";

export default function Rooster(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Studie
                </h2>
            }
        >
            <Head title="Studie" />

            <div className="flex justify-center my-3">
                <div className="space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink
                        href={route("opleiding")}
                        active={route().current("opleiding")}
                    >
                        Opleiding
                    </NavLink>
                    <NavLink
                        href={route("rooster")}
                        active={route().current("opleiding")}
                    >
                        Dossier
                    </NavLink>
                    <NavLink
                        href={route("rooster")}
                        active={route().current("opleiding")}
                    >
                        Groepen
                    </NavLink>
                    <NavLink
                        href={route("rooster")}
                        active={route().current("opleiding")}
                    >
                        Vakken
                    </NavLink>
                    <NavLink
                        href={route("rooster")}
                        active={route().current("opleiding")}
                    >
                        Document
                    </NavLink>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Meer informatie!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
