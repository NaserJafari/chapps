import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Rooster(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Rooster
                </h2>
            }
        >


            <Head title="Rooster" />
            <div className="my-10 bg-black ">
                    test

            </div>

        </AuthenticatedLayout>



    );
}
