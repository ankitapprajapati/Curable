import { atom, selector } from "recoil";
import { doctors } from "./assets/assets_frontend/assets";

export const filteredDoctorAtom = atom({
    key:"filterDoctorAtom",
    default:selector({
        key:"filterDoctorAtomSelector",
        get: async ()=>{
            const doc = await doctors.find( (doctor)=> doctor._id===id );
            return doc
        }
    })
})