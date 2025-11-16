import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import React, { useState, useEffect } from "react";

function DriversProfile({ onClose }) {
  const [zoomedImage, setZoomedImage] = useState(null); // null | 'license' | 'nin'

  // Lock scroll when zoomed
  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [zoomedImage]);

  const openImage = (type) => {
    setZoomedImage(type);
  };

  const closeImage = () => {
    setZoomedImage(null);
  };

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeImage();
    };
    if (zoomedImage) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [zoomedImage]);

  return (
    <div className="">
      <div className=" max-w-4xl px-6 py-3 bg-white sm:max-h-[95vh] max-h-[100vh] overflow-y-auto rounded-lg relative mx-auto">
        <p
          className="text-right font-semibold text-[20px] cursor-pointer absolute top-3 right-3"
          onClick={onClose}
        >
          X
        </p>

        <h2 className="font-semibold text-[24px] pt-4">Driver Profile</h2>

        <div className="flex flex-wrap gap-2 justify-between  py-8 ">
          <div className="flex items-center gap-3 ">
            <img src="/danraph-image.png" alt="" />
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2">
                <span className="bg-[#E1C90F] rounded-full w-[13px] h-[13px] "></span>
                <span>Inactive</span>
              </p>
              <div className="flex flex-wrap items-center gap-1">
                <p className="flex">
                  <Star className="w-3 h-3 fill-black " />
                  <Star className="w-3 h-3 fill-black" />
                  <Star className="w-3 h-3 fill-black" />
                  <Star className="w-3 h-3 fill-black" />
                  <Star className="w-3 h-3 fill-black" />
                </p>
                <p>4.8 Rating</p>
              </div>
            </div>
          </div>

          <div>
            <button className="bg-[#004AAD] px-4 py-2 text-white rounded-lg hover:bg-[#004badde] duration-300 transition-all ">
              Activate Driver
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-[20px] font-medium ">Basic details</h2>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-4 py-3">
              <p className="text-[#666666]">
                <span className="font-medium">Name </span>
                <span className="font-medium">- </span>
                <span>Amanda Okoro</span>
              </p>

              <p className="text-[#666666]">
                <span className="font-medium">Contact </span>
                <span className="font-medium">- </span>
                <span>mandyokoro@gmail.vom (0811234567)</span>
              </p>

              <p className="text-[#666666]">
                <span className="font-medium">Address </span>
                <span className="font-medium">- </span>
                <span>No 2 Madubuike Street, Nsukka</span>
              </p>

              <p className="text-[#666666]">
                <span className="font-medium">Assigned Vehicle </span>
                <span className="font-medium">- </span>
                <span>
                  Plate No: ENU-452-AA | Model: <br /> Ford Transit (18-Seater)
                </span>
              </p>

              <p className="text-[#666666]">
                <span className="font-medium">ID verification status </span>
                <span className="font-medium">- </span>
                <span>Verified </span>
              </p>
            </div>

            <div className="sm:translate-y-[120px]">
              <h2 className="text-[#004AAD] sm:text-right underline font-semibold py-3 cursor-pointer ">
                Re-assign Driver
              </h2>
              <div className="flex justify-between gap-3">
                <div className="">
                  <img
                    src="/passport2.png"
                    alt="Driver License"
                    className="brightness-50 w-[113px] cursor-pointer hover:brightness-100 transition"
                    onClick={() => openImage("license")}
                  />
                  <p
                    className="underline text-center cursor-pointer py-1"
                    onClick={() => openImage("license")}
                  >
                    View Driver license
                  </p>
                </div>
                <div className="">
                  <img
                    src="/passport1.png"
                    alt="NIN"
                    className="brightness-50 w-[113px] cursor-pointer hover:brightness-100 transition"
                    onClick={() => openImage("nin")}
                  />
                  <p
                    className="underline text-center cursor-pointer py-1"
                    onClick={() => openImage("nin")}
                  >
                    View NIN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#58585880] sm:mt-[70px] mt-[30px] "></div>

        <div className="py-6">
          <div>
            <h2 className="font-medium text-[20px] ">
              <span>Trips completed </span>
              <span className="text-[#004AAD]">(30)</span>
            </h2>
            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full min-w-[65 0px] ">
                <thead className="border-b py-3">
                  <tr>
                    <th className="px-3 py-3 text-left">Date</th>
                    <th className="px-3 py-3 text-left">Destination</th>
                    <th className="px-3 py-3 text-left">Fare (₦)</th>
                    <th className="px-3 py-3 text-left">User</th>
                    <th className="pl-3 py-3 text-left">Complaints Recieved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className=" flex flex-col pl-3 py-1 text-[#5C5C5D] ">
                      <span className="text-[15px]">4/4/2024</span>
                      <span className="text-[11px]">10:00AM</span>
                    </td>
                    <td className="  pl-3 py-1 text-[#5C5C5D] ">
                      <span className="text-[15px]">Main gate </span>
                      <p className="flex gap-1 items-center text-[12px] ">
                        <span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        <span>Hostel A</span>
                      </p>
                    </td>
                    <td className="pl-3 py-1 "> ₦250</td>
                    <td className="py-1">
                      <div className="flex pl-2">
                        <span className="text-[15px]">Mandy Okeke</span>
                        <span>
                          <ArrowUpRight className="w-5 h-5 text-[#5C5C5D]" />
                        </span>
                      </div>
                    </td>
                    <td className="pl-3 py-1 text-[#5C5C5D] ">None</td>
                  </tr>
                  <tr className="border-b">
                    <td className="flex flex-col pl-3 py-1 text-[#5C5C5D] ">
                      <span className="text-[15px]">4/4/2024</span>
                      <span className="text-[11px]">10:00AM</span>
                    </td>
                    <td className="  pl-3 py-1 text-[#5C5C5D] ">
                      <span className="text-[15px]">Main gate </span>
                      <p className="flex gap-1 items-center text-[12px] ">
                        <span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        <span>Hostel A</span>
                      </p>
                    </td>
                    <td className="pl-3 py-1 "> ₦250</td>
                    <td className="py-1">
                      <div className="flex pl-2">
                        <span className="text-[15px]">Mandy Okeke</span>
                        <span>
                          <ArrowUpRight className="w-5 h-5 text-[#5C5C5D]" />
                        </span>
                      </div>
                    </td>
                    <td className="pl-3 py-1 text-[#5C5C5D] ">None</td>
                  </tr>
                  <tr className="border-b">
                    <td className="flex flex-col pl-3 py-1 text-[#5C5C5D] ">
                      <span className="text-[15px]">4/4/2024</span>
                      <span className="text-[11px]">10:00AM</span>
                    </td>
                    <td className="  pl-3 py-1 text-[#5C5C5D] ">
                      <span className="text-[15px]">Main gate </span>
                      <p className="flex gap-1 items-center text-[12px] ">
                        <span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        <span>Hostel A</span>
                      </p>
                    </td>
                    <td className="pl-3 py-1 "> ₦250</td>
                    <td className="py-1">
                      <div className="flex pl-2">
                        <span className="text-[15px]">Mandy Okeke</span>
                        <span>
                          <ArrowUpRight className="w-5 h-5 text-[#5C5C5D]" />
                        </span>
                      </div>
                    </td>
                    <td className="pl-3 py-1 text-[#5C5C5D] ">None</td>
                  </tr>
                  <tr className="border-b  ">
                    <td className="flex flex-col pl-3 py-1 text-[#5C5C5D] ">
                      <span className="text-[15px]">4/4/2024</span>
                      <span className="text-[11px]">10:00AM</span>
                    </td>
                    <td className="  pl-3 py-1 text-[#5C5C5D] ">
                      <span className="text-[15px]">Main gate </span>
                      <p className="flex gap-1 items-center text-[12px] ">
                        <span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        <span>Hostel A</span>
                      </p>
                    </td>
                    <td className="pl-3 py-1 "> ₦250</td>
                    <td className="py-1">
                      <div className="flex pl-2">
                        <span className="text-[15px]">Mandy Okeke</span>
                        <span>
                          <ArrowUpRight className="w-5 h-5 text-[#5C5C5D]" />
                        </span>
                      </div>
                    </td>
                    <td className="pl-3 py-1 text-[#5C5C5D] ">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ZOOM MODAL OVERLAY ===== */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeImage}
          style={{ animation: "fadeIn 0.2s ease-out" }}
        >
          <div
            className="relative max-w-full max-h-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeImage}
              className="absolute -top-12 right-0 text-white text-xl font-bold hover:text-gray-300"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={
                zoomedImage === "license" ? "/passport2.png" : "/passport1.png"
              }
              alt={zoomedImage === "license" ? "Driver License" : "NIN"}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border-2 border-white"
              style={{
                animation:
                  "zoomIn 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
              }}
            />

            {/* Caption */}
            <p className="text-white text-center mt-2 text-lg">
              {zoomedImage === "license"
                ? "Driver License"
                : "National ID (NIN)"}
            </p>
          </div>
        </div>
      )}

      {/* Add animations globally or here via style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default DriversProfile;
