import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function Opleiding(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Opleiding
                </h2>
            }
        >
            <Head title="Opleiding" />

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
                        active={route().current("rooster")}
                    >
                        Dossier
                    </NavLink>
                    <NavLink
                        href={route("rooster")}
                        active={route().current("rooster")}
                    >
                        Groepen
                    </NavLink>
                    <NavLink
                        href={route("rooster")}
                        active={route().current("rooster")}
                    >
                        Vakken
                    </NavLink>
                    <NavLink
                        href={route("rooster")}
                        active={route().current("rooster")}
                    >
                        Document
                    </NavLink>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-base">Software Developer</h1>
                            <p className="text-xs">25604</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
