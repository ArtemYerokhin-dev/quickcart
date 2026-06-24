'use client';
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const MyOrders = () => {

    const { currency, orders } = useAppContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [orders]);

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-6 min-h-screen">
                <div className="space-y-5">
                    <h2 className="text-lg font-medium mt-6">My Orders</h2>
                    {loading ? <Loading /> : (
                        <div className="max-w-5xl border-t border-gray-300 text-sm">
                            {orders.length === 0 && (
                                <div className="py-16 text-center text-gray-400">
                                    <p className="text-lg">No orders yet</p>
                                    <p className="mt-2 text-sm">Start shopping to see your orders here</p>
                                </div>
                            )}
                            {orders.map((order, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-5 justify-between p-5 border-b border-gray-300">
                                    <div className="flex-1 flex gap-5 max-w-80">
                                        <Image
                                            className="max-w-16 max-h-16 object-cover"
                                            src={assets.box_icon}
                                            alt="box_icon"
                                        />
                                        <p className="flex flex-col gap-3">
                                            <span className="font-medium text-base">
                                                {order.items.map((item) => item.product.name + ` x ${item.quantity}`).join(", ")}
                                            </span>
                                            <span>Items : {order.items.length}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <span className="font-medium">{order.address.fullName}</span>
                                            <br />
                                            <span>{order.address.area}</span>
                                            <br />
                                            <span>{`${order.address.city}, ${order.address.state}`}</span>
                                            <br />
                                            <span>{order.address.phoneNumber}</span>
                                        </p>
                                    </div>
                                    <p className="font-medium my-auto">{currency}{order.amount}</p>
                                    <div>
                                        <p className="flex flex-col">
                                            <span>Method : {order.paymentMethod}</span>
                                            <span>Date : {new Date(order.date).toLocaleDateString()}</span>
                                            <span className={order.paymentStatus === 'Paid' ? 'text-green-600' : 'text-orange-500'}>
                                                Payment : {order.paymentStatus}
                                            </span>
                                            <span className="text-blue-600 font-medium mt-1">{order.status}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyOrders;
