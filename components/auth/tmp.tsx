import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { toast } from "react-toastify";
import { getStatusData, updateApplicant } from "../../services/api.service";
import placeholderImg from "../../public/assets/placeholderImg.jpg"
import StatusInfo from "./../../models/StatusInfo";
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
const Application = () => {
    const [profileData, setProfileData] = useState<StatusInfo>();
    //console.log(profileData, "profileData");
    const initialValue = {
        name: "",
        father_name: "",
        mother_name: "",
        land_phone: "",
        nid_number: "",
        passport_number: "",
        driving_number: "",
        dob: "",
        occupation: "",
        present_address: "",
        permanent_address: "",
    };

    const [inputValues, setInputValues] = useState(initialValue);
    //console.log(inputValues, "inputValues");
    // const date = Date.now()

    const date = new Date();
    const maxDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split("T")[0];
    //console.log(maxDate, "maxDate");
    const [isEditone, setIsEditone] = useState(false);
    //console.log(isEditone, "isEditone");
    const [isEditTwo, setIsEditTwo] = useState(false);
    //console.log(isEditTwo, "isEditTwo");
    const [hiv, setHiv] = useState("");
    //console.log(hiv, "hiv");

    const [profileImg, setProfileImg] = useState("");
    //console.log(profileImg, "profileImg");

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };
    const handleHiv = (event: any) => {
        setHiv(event.target.value);
    };

    const getprofileData = async () => {
        const url = "/insurances/profile";
        const payload = {
            msisdn: localStorage.getItem("userid"),
        };
        try {
            // setloading(true)
            const data = await getStatusData(url, payload);

            if(data.success === false) {
                //console.log("failed");
                // toast.warning("Please Input a correct Number");
                return;
            }
            //console.log("data", data);
            // localStorage.setItem("msisdn", JSON.stringify(payload.msisdn));
            setProfileData(data?.data);
            setHiv(data?.data?.profile?.is_hiv_positive);
            // setloading(false)
            // navigate.push("../auth/verification");
        } catch(err) {
            toast.warning("Somethoing Wrong, Please Wait");
        }
    };
    useEffect(() => {
        const callApi = async () => {
            await getprofileData();
        };
        callApi();
    }, []);

    const editApplicant = async (param: any) => {
        const apidata = profileData?.profile;
        const id = apidata?.id;
        const is_hiv_positive = hiv ? hiv : apidata?.is_hiv_positive;
        //console.log(is_hiv_positive, "is_hiv_positive");

        const photo_url = profileImg ? profileImg : "";
        const name = inputValues?.name ? inputValues?.name : apidata?.name;
        const father_name = inputValues?.father_name
            ? inputValues?.father_name
            : apidata?.father_name;
        const mother_name = inputValues?.mother_name
            ? inputValues?.mother_name
            : apidata?.mother_name;
        const land_phone = inputValues?.land_phone
            ? inputValues?.land_phone
            : profileData?.msisdn;
        const nid_number = inputValues?.nid_number
            ? inputValues?.nid_number
            : apidata?.nid_number;
        const passport_number = inputValues?.passport_number
            ? inputValues?.passport_number
            : apidata?.passport_number;
        const driving_number = inputValues?.driving_number
            ? inputValues?.driving_number
            : apidata?.driving_number;
        const dob = inputValues?.dob ? inputValues?.dob : apidata?.dob;
        const occupation = inputValues?.occupation
            ? inputValues?.occupation
            : apidata?.occupation;
        const present_address = inputValues?.present_address
            ? inputValues?.present_address
            : apidata?.present_address;
        const permanent_address = inputValues?.permanent_address
            ? inputValues?.permanent_address
            : apidata?.permanent_address;
        let datas: Object = {
            id,
            name,
            father_name,
            mother_name,
            land_phone,
            nid_number,
            passport_number,
            driving_number,
            dob,
            occupation,
            present_address,
            permanent_address,
            is_hiv_positive,
        };
        if(photo_url) {
            datas = {
                ...datas,
                photo_url: photo_url,
            };
        }
        // console.log(datas, "inputdata");

        const url = `/insurances/profile`;
        try {
            const ApiCall = await updateApplicant(url, datas);
            //console.log(ApiCall, "data from update");
            if(param === 1) setIsEditone(false)
            else setIsEditTwo(false)



            toast.info("Info updated");
            await getprofileData();
            //   router.push("../package");
        } catch(err) {
            console.log(err);
        }
    };
    const onProfileImgChange = async (e: any) => {
        const file = e.target.files[0];
        // console.log(`file dekhi: ${file}`);
        setProfileImg(file);
        // const fileObject = URL.createObjectURL(file)
        // setProfileImg(fileObject)
        // console.log(fileObject, "file");
    };
    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };


    return (
        <div>
            <div className="container">

                {/ view fields  /}
                <div className="">

                    {/ image upload /}
                    <div>
                        <div>
                            <div className=" py-3 grid place-items-center">
                                {profileData?.profile?.photo_url ? <Image
                                    loader={myLoader}
                                    src={profileData?.profile?.photo_url}
                                    width={100}
                                    height={100}
                                    alt="profileimg"
                                /> : <Image
                                    loader={myLoader}
                                    src={placeholderImg}
                                    width={100}
                                    height={100}
                                    alt="profileimg"
                                />}
                            </div>

                            <div className=" flex justify-between">
                                <div>

                                </div>
                                <button onClick={(e) => { setIsEditone(!isEditone) }} className="border-2 border-sky-400 hover:border-sky-700">
                                    <EditIcon />
                                </button>
                            </div>


                        </div>
                    </div>
                    {/ part1 /}
                    {isEditone === true ?
            <div>
              <div className="py-3 grid place-items-center">
                {/ <input className=' p-3' type="file" /> /}
                <label htmlFor="profileimg">
                  <input
                    style={{ display: "none" }}
                    id="profileimg"
                    name="profileimg"
                    onChange={onProfileImgChange}
                    type="file"
                  />
                  <Button
                    // color="secondary"
                    variant="contained"
                    component="span"
                    className=" hover:  hover:bg-sky-600"
                    style={{
                      width: "100%",
                      padding: "10px",
                      // color: "#ffffff"
                    }}
                  >
                    Upload a new Profile Image
                  </Button>
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label font-bold">
                  Full Name<span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Full Name"
                  defaultValue={profileData?.profile?.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label font-bold">
                  Phone Number<span className="required">*</span>
                </label>
                <input
                  type="number"
                  className="form-control cursor-not-allowed"
                  id="phonenumber"
                  placeholder="Phone Number"
                  name="land_phone"
                  onChange={handleInputChange}
                  defaultValue={profileData?.msisdn}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label className="form-label  font-bold">
                  Fathers Name<span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="faname"
                  placeholder="Father's Name"
                  name="father_name"
                  onChange={handleInputChange}
                  defaultValue={profileData?.profile?.father_name}
                />
              </div>

              <div className="mb-3">
                <label className="form-label  font-bold">
                  Mothers Name<span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maname"
                  placeholder="Mother's Name"
                  name="mother_name"
                  onChange={handleInputChange}
                  defaultValue={profileData?.profile?.mother_name}
                />
              </div>

              <div className="flex justify-between gap-x-2 md:gap-x-8">

                <button onClick={(e) => { setIsEditone(!isEditone) }} className="!text-sm md:!text-lg w-full btn btn-danger">
                  বাতিল করুন
                </button>
                <button onClick={(e) => { editApplicant(1) }} className="!text-sm md:!text-lg w-full btn btn-primary">
                  আপডেট করুন
                </button>
              </div>


            </div>
                :
                <div className="">
                    <div className="my-3">
                        <p className=" text-sm md:text-lg font-bold ">
                            Full Name : <span className=" font-semibold  md:pl-5">{profileData?.profile?.name}</span>
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className=" text-sm md:text-lg font-bold ">
                            Phone Number : <span className=" font-semibold   md:pl-5">{profileData?.msisdn}</span>
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className=" text-sm md:text-lg font-bold ">
                            Father Name : <span className=" font-semibold   md:pl-5">{profileData?.profile?.father_name}</span>
                        </p>
                    </div>

                    <div className="mb-3">
                        <p className=" text-sm md:text-lg font-bold ">
                            Mother Name : <span className=" font-semibold   md:pl-5">{profileData?.profile?.mother_name}</span>
                        </p>
                    </div>


                </div>
          }

                {/ part 2 /}
                <div className=" py-3 flex justify-between">
                    <div>

                    </div>
                    <button onClick={(e) => { setIsEditTwo(!isEditTwo) }} className="border-2 border-sky-400 hover:border-sky-700">
                        <EditIcon />
                    </button>
                </div>

                {isEditTwo === true ?
                    <div className="">
                        <div className="mb-3">
                            <label className="form-label font-bold">
                                NID Number<span className="required">*</span>
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="nid"
                                placeholder="NID Number"
                                name="nid_number"
                                onChange={handleInputChange}
                                defaultValue={profileData?.profile?.nid_number}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label font-bold">Passport Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pnumber"
                                placeholder="Passport Number"
                                name="passport_number"
                                onChange={handleInputChange}
                                defaultValue={profileData?.profile?.passport_number}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label font-bold">Driving License</label>
                            <input
                                type="text"
                                className="form-control"
                                id="dlnumber"
                                placeholder="Driving License"
                                name="driving_number"
                                onChange={handleInputChange}
                                defaultValue={profileData?.profile?.driving_number}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label font-bold">
                                Date of Birth (as NID)<span className="required">*</span>
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="maname"
                                placeholder="Date of Birth"
                                name="dob"
                                // max={Date.now()}
                                max={maxDate}
                                onChange={handleInputChange}
                                defaultValue={profileData?.profile?.dob.slice(0, 10)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label font-bold">Occupation</label>
                            <input
                                type="text"
                                className="form-control"
                                id="occupation"
                                placeholder="Occupation"
                                name="occupation"
                                onChange={handleInputChange}
                                defaultValue={profileData?.profile?.occupation}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label font-bold">Present Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="maname"
                                placeholder="Present Address"
                                name="present_address"
                                onChange={handleInputChange}
                                defaultValue={profileData?.profile?.present_address}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label font-bold">Permanent Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="maname"
                                placeholder="Permanent Address"
                                name="permanent_address"
                                onChange={handleInputChange}
                                defaultValue={profileData?.profile?.permanent_address}
                            />
                        </div>

                        <div>
                            <label className="font-bold">
                                HIV Positive<span className="required ">*</span>
                            </label>
                        </div>

                        <FormControl>
                            <RadioGroup
                                className=""
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                value={hiv}
                                onChange={handleHiv}
                            >
                                <div className="flex  text-md">
                                    <FormControlLabel
                                        value={"Yes"}
                                        control={<Radio />}
                                        label="Yes"
                                        className=""
                                    />
                                    <FormControlLabel value={"No"} control={<Radio />} label="No" />
                                </div>
                            </RadioGroup>
                        </FormControl>

                        <div className="flex justify-between gap-x-2 md:gap-x-8">

                            <button onClick={(e) => { setIsEditTwo(!isEditTwo) }} className=" !text-sm md:!text-lg w-full btn btn-danger">
                                বাতিল করুন
                            </button>
                            <button onClick={(e) => { editApplicant(2) }} className="!text-sm md:!text-lg w-full btn btn-primary">
                                আপডেট করুন
                            </button>
                        </div>

                    </div>
                    :
                    <div className="">
                        <div className="mb-3">
                            <p className=" text-sm md:text-lg font-bold ">
                                NID Number : <span className=" font-semibold  md:pl-5">{profileData?.profile?.nid_number}</span>
                            </p>

                        </div>

                        <div className="mb-3">
                            <p className=" text-sm md:text-lg font-bold ">
                                Passport Number : <span className=" font-semibold  md:pl-5">{profileData?.profile?.passport_number}</span>
                            </p>

                        </div>

                        <div className="mb-3">

                            <p className=" text-sm md:text-lg font-bold ">
                                Driving License : <span className=" font-semibold  md:pl-5">{profileData?.profile?.driving_number}</span>
                            </p>

                        </div>

                        <div className="mb-3">
                            <p className=" text-sm md:text-lg font-bold ">
                                Date of Birth (as NID) : <span className=" font-semibold  md:pl-5">{profileData?.profile?.dob.slice(0, 10)}</span>
                            </p>

                        </div>
                        <div className="mb-3">

                            <p className=" text-sm md:text-lg font-bold ">
                                Occupation : <span className=" font-semibold  md:pl-5">{profileData?.profile?.occupation}</span>
                            </p>

                        </div>
                        <div className="mb-3">
                            <p className=" text-sm md:text-lg font-bold ">
                                Present Address : <span className=" font-semibold  md:pl-5">{profileData?.profile?.present_address}</span>
                            </p>

                        </div>

                        <div className="mb-3">
                            <p className=" text-sm md:text-lg font-bold ">
                                Permanent Address : <span className=" font-semibold  md:pl-5">{profileData?.profile?.permanent_address}</span>
                            </p>

                        </div>
                        <div className="mb-3">
                            <p className=" text-sm md:text-lg font-bold ">
                                HIV Positive : <span className=" font-semibold  md:pl-5">{profileData?.profile?.is_hiv_positive}</span>
                            </p>

                        </div>
                    </div>
                }

            </div>







        </div>
    </div >
  );
};

export default Application;
