"use client";

import { useState } from 'react';
import { Minus, Plus, Twitter } from 'lucide-react';

const faqs = [
	{
		question: "WHAT IS TRUMPIDENTIAL TOWER?",
		answer: "Trumpidential Tower is a simulation game with meme elements, where you manage a skyscraper hotel and earn cryptocurrency. It is inspired by Donald Trump's real estate background."
	},
	{
		question: "WHERE CAN I PLAY TRUMPIDENTIAL TOWER?",
		answer: "The game will be available on web browsers and mobile devices. Stay tuned for the official launch!"
	},
	{
		question: "WHAT IS THE $T TOKEN UTILITY?",
		answer: "The $T token is the native currency of Trumpidential Tower, used for in-game purchases, upgrades, and earning rewards."
	},
	{
		question: "WHICH WALLETS WORK TO BUY $PLAY?",
		answer: "We support major Web3 wallets including MetaMask, WalletConnect, and Trust Wallet."
	},
	{
		question: "HOW DO I CONTACT SUPPORT?",
		answer: "You can reach our support team through our Discord channel or by emailing support@trumpidentialtower.com"
	}
];

export default function Footer() {
	const [openFaqs, setOpenFaqs] = useState({});

	const toggleFaq = (question) => {
		setOpenFaqs(prev => ({
			...prev,
			[question]: !prev[question]
		}));
	};

	return (
		<div>
			{/* FAQs Section */}
			<section className="faq-area pb-20 pt-5" id="faq">
				<div className="max-w-7xl mx-auto px-8 lg:px-0">
					<h2 className="mb-[60px] lg:text-[32px] text-3xl text-center uppercase font-kids-magazine text-stroke-2 drop-shadow-[0px_4px_0px_black]">Faqs</h2>
					<div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
						<div className="col-span-full lg:col-span-5">
							<img
								src="./faq-runing.png"
								alt="FAQ Image"
								className="rounded-lg transform hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<div className="col-span-full lg:col-span-7">
							{faqs.map((faq, index) => (
								<div
									key={index}
									className="border-b-2 border-white"
								>
									<button
										className="w-full flex items-center justify-between py-6 text-left"
										onClick={() => toggleFaq(faq.question)}
									>
										<span className="text-xl font-kids-magazine text-stroke-2 drop-shadow-[0px_2px_0px_black] font-semibold">{faq.question}</span>
										{openFaqs[faq.question] ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="28"
												viewBox="0 0 24 24"
												fill="none"
												stroke="black"
												stroke-width="8"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-minus"
											>
												<path d="M5 12h14" stroke="black" stroke-width="8" />
												<path d="M5 12h14" stroke="white" stroke-width="4" />
											</svg>
										) : (
											<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
												<mask id="path-1-outside-1_69_433" maskUnits="userSpaceOnUse" x="0.300232" y="0.299805" width="22" height="22" fill="black">
													<rect fill="white" x="0.300232" y="0.299805" width="22" height="22" />
													<path d="M19.2649 8.53284H13.4655V2.73492C13.4654 2.61958 13.4196 2.50898 13.3381 2.4274C13.2565 2.34582 13.146 2.29993 13.0306 2.2998H8.96863C8.85327 2.29987 8.74266 2.34574 8.66111 2.42733C8.57956 2.50893 8.53375 2.61957 8.53375 2.73492L8.53351 8.53332L2.73535 8.53308C2.50471 8.53308 2.30047 8.73732 2.30023 8.9682V13.0302C2.30017 13.0874 2.31138 13.1439 2.33323 13.1968C2.35508 13.2496 2.38713 13.2975 2.42755 13.3379C2.46797 13.3783 2.51596 13.4104 2.56878 13.4322C2.6216 13.454 2.6782 13.4652 2.73535 13.4651H8.53375V19.2647C8.53382 19.3801 8.57968 19.4907 8.66127 19.5723C8.74285 19.6539 8.85349 19.6997 8.96887 19.6998H13.0304C13.0875 19.6998 13.1441 19.6885 13.1969 19.6667C13.2497 19.6448 13.2977 19.6128 13.3381 19.5724C13.3785 19.532 13.4105 19.484 13.4324 19.4312C13.4543 19.3784 13.4655 19.3218 13.4655 19.2647V13.4653L19.2646 13.4651C19.3218 13.4652 19.3784 13.454 19.4313 13.4322C19.4841 13.4103 19.5321 13.3783 19.5725 13.3379C19.6129 13.2974 19.645 13.2494 19.6668 13.1966C19.6887 13.1438 19.6998 13.0871 19.6998 13.03L19.7 8.96796C19.7 8.85256 19.6542 8.74189 19.5725 8.66029C19.4909 8.57869 19.3803 8.53284 19.2649 8.53284Z" />
												</mask>
												<path d="M19.2649 8.53284H13.4655V2.73492C13.4654 2.61958 13.4196 2.50898 13.3381 2.4274C13.2565 2.34582 13.146 2.29993 13.0306 2.2998H8.96863C8.85327 2.29987 8.74266 2.34574 8.66111 2.42733C8.57956 2.50893 8.53375 2.61957 8.53375 2.73492L8.53351 8.53332L2.73535 8.53308C2.50471 8.53308 2.30047 8.73732 2.30023 8.9682V13.0302C2.30017 13.0874 2.31138 13.1439 2.33323 13.1968C2.35508 13.2496 2.38713 13.2975 2.42755 13.3379C2.46797 13.3783 2.51596 13.4104 2.56878 13.4322C2.6216 13.454 2.6782 13.4652 2.73535 13.4651H8.53375V19.2647C8.53382 19.3801 8.57968 19.4907 8.66127 19.5723C8.74285 19.6539 8.85349 19.6997 8.96887 19.6998H13.0304C13.0875 19.6998 13.1441 19.6885 13.1969 19.6667C13.2497 19.6448 13.2977 19.6128 13.3381 19.5724C13.3785 19.532 13.4105 19.484 13.4324 19.4312C13.4543 19.3784 13.4655 19.3218 13.4655 19.2647V13.4653L19.2646 13.4651C19.3218 13.4652 19.3784 13.454 19.4313 13.4322C19.4841 13.4103 19.5321 13.3783 19.5725 13.3379C19.6129 13.2974 19.645 13.2494 19.6668 13.1966C19.6887 13.1438 19.6998 13.0871 19.6998 13.03L19.7 8.96796C19.7 8.85256 19.6542 8.74189 19.5725 8.66029C19.4909 8.57869 19.3803 8.53284 19.2649 8.53284Z" fill="white" />
												<path d="M13.4655 8.53284H11.4655V10.5328H13.4655V8.53284ZM13.4655 2.73492H15.4655L15.4655 2.73382L13.4655 2.73492ZM13.0306 2.2998L13.0328 0.299805H13.0306V2.2998ZM8.96863 2.2998V0.299804L8.96753 0.299805L8.96863 2.2998ZM8.53375 2.73492L10.5338 2.73501V2.73492L8.53375 2.73492ZM8.53351 8.53332L8.53343 10.5333L10.5334 10.5334L10.5335 8.53341L8.53351 8.53332ZM2.73535 8.53308L2.73543 6.53308H2.73535V8.53308ZM2.30023 8.9682L0.300232 8.96613V8.9682H2.30023ZM2.30023 13.0302L4.30023 13.0324V13.0302H2.30023ZM2.73535 13.4651V11.4651L2.73204 11.4651L2.73535 13.4651ZM8.53375 13.4651H10.5338V11.4651H8.53375V13.4651ZM8.53375 19.2647H6.53375L6.53375 19.2658L8.53375 19.2647ZM8.96887 19.6998L8.96777 21.6998H8.96887V19.6998ZM13.4655 19.2647H11.4655H13.4655ZM13.4655 13.4653L13.4654 11.4653L11.4655 11.4654V13.4653H13.4655ZM19.2646 13.4651L19.2679 11.4651H19.2645L19.2646 13.4651ZM19.6998 13.03L17.6997 13.0298L17.6998 13.0333L19.6998 13.03ZM19.7 8.96796L21.7 8.96808V8.96796H19.7ZM19.2649 6.53284H13.4655V10.5328H19.2649V6.53284ZM15.4655 8.53284V2.73492H11.4655V8.53284H15.4655ZM15.4655 2.73382C15.4652 2.08863 15.2088 1.46993 14.7527 1.01358L11.9235 3.84123C11.6304 3.54803 11.4657 3.15054 11.4655 2.73603L15.4655 2.73382ZM14.7527 1.01358C14.2966 0.557227 13.678 0.300517 13.0328 0.299806L13.0284 4.2998C12.6139 4.29935 12.2165 4.13442 11.9235 3.84123L14.7527 1.01358ZM13.0306 0.299805H8.96863V4.2998H13.0306V0.299805ZM8.96753 0.299805C8.32193 0.300161 7.70289 0.556876 7.24651 1.01351L10.0757 3.84116C9.78243 4.1346 9.38462 4.29958 8.96973 4.2998L8.96753 0.299805ZM7.24651 1.01351C6.79013 1.47014 6.53375 2.08932 6.53375 2.73492L10.5338 2.73492C10.5338 3.14981 10.369 3.54771 10.0757 3.84116L7.24651 1.01351ZM6.53375 2.73484L6.53351 8.53324L10.5335 8.53341L10.5338 2.73501L6.53375 2.73484ZM8.53359 6.53332L2.73543 6.53308L2.73527 10.5331L8.53343 10.5333L8.53359 6.53332ZM2.73535 6.53308C1.399 6.53308 0.301619 7.63345 0.300233 8.96613L4.30023 8.97028C4.29973 9.4477 4.0931 9.83078 3.84561 10.0783C3.59814 10.3257 3.2143 10.5331 2.73535 10.5331V6.53308ZM0.300232 8.9682V13.0302H4.30023V8.9682H0.300232ZM0.300233 13.028C0.299879 13.3482 0.362718 13.6654 0.485153 13.9614L4.18131 12.4322C4.26005 12.6225 4.30046 12.8265 4.30023 13.0324L0.300233 13.028ZM0.485153 13.9614C0.607587 14.2573 0.787208 14.5261 1.01373 14.7525L3.84137 11.9233C3.98705 12.0689 4.10257 12.2418 4.18131 12.4322L0.485153 13.9614ZM1.01373 14.7525C1.24023 14.9789 1.50919 15.1584 1.8052 15.2807L3.33236 11.5837C3.52273 11.6623 3.6957 11.7777 3.84137 11.9233L1.01373 14.7525ZM1.8052 15.2807C2.10121 15.403 2.41843 15.4656 2.73867 15.4651L2.73204 11.4651C2.93798 11.4647 3.14199 11.505 3.33236 11.5837L1.8052 15.2807ZM2.73535 15.4651H8.53375V11.4651H2.73535V15.4651ZM6.53375 13.4651V19.2647H10.5338V13.4651H6.53375ZM6.53375 19.2658C6.53411 19.9112 6.79066 20.5301 7.24705 20.9865L10.0755 18.1581C10.3687 18.4513 10.5335 18.8489 10.5338 19.2636L6.53375 19.2658ZM7.24705 20.9865C7.70344 21.4429 8.32233 21.6994 8.96777 21.6998L8.96997 17.6998C9.38465 17.7 9.78227 17.8649 10.0755 18.1581L7.24705 20.9865ZM8.96887 21.6998H13.0304V17.6998H8.96887V21.6998ZM13.0304 21.6998C13.3502 21.6998 13.6668 21.6368 13.9623 21.5144L12.4315 17.8189C12.6214 17.7403 12.8249 17.6998 13.0304 17.6998V21.6998ZM13.9623 21.5144C14.2577 21.3921 14.5261 21.2127 14.7523 20.9866L11.9239 18.1581C12.0692 18.0128 12.2417 17.8976 12.4315 17.8189L13.9623 21.5144ZM14.7523 20.9866C14.9784 20.7605 15.1578 20.492 15.2801 20.1966L11.5846 18.6658C11.6633 18.476 11.7785 18.3035 11.9239 18.1581L14.7523 20.9866ZM15.2801 20.1966C15.4025 19.9011 15.4655 19.5845 15.4655 19.2647H11.4655C11.4655 19.0592 11.506 18.8557 11.5846 18.6658L15.2801 20.1966ZM15.4655 19.2647V13.4653H11.4655V19.2647H15.4655ZM13.4656 15.4653L19.2647 15.4651L19.2645 11.4651L13.4654 11.4653L13.4656 15.4653ZM19.2613 15.4651C19.5817 15.4656 19.899 15.4029 20.1951 15.2806L18.6674 11.5838C18.8579 11.5051 19.0619 11.4647 19.2679 11.4651L19.2613 15.4651ZM20.1951 15.2806C20.4912 15.1582 20.7602 14.9786 20.9867 14.7521L18.1583 11.9236C18.304 11.778 18.477 11.6625 18.6674 11.5838L20.1951 15.2806ZM20.9867 14.7521C21.2133 14.5255 21.3929 14.2565 21.5152 13.9604L17.8184 12.4328C17.8971 12.2423 18.0126 12.0693 18.1583 11.9236L20.9867 14.7521ZM21.5152 13.9604C21.6376 13.6643 21.7003 13.347 21.6997 13.0266L17.6998 13.0333C17.6994 12.8273 17.7397 12.6232 17.8184 12.4328L21.5152 13.9604ZM21.6998 13.0301L21.7 8.96808L17.7 8.96785L17.6998 13.0298L21.6998 13.0301ZM21.7 8.96796C21.7 8.32214 21.4434 7.70275 20.9868 7.24607L18.1583 10.0745C17.8649 9.78102 17.7 9.38299 17.7 8.96796H21.7ZM20.9868 7.24607C20.5301 6.78939 19.9107 6.53284 19.2649 6.53284V10.5328C18.8499 10.5328 18.4518 10.368 18.1583 10.0745L20.9868 7.24607Z" fill="black" mask="url(#path-1-outside-1_69_433)" />
											</svg>
										)}
									</button>

									{openFaqs[faq.question] && (
										<div className="pb-6 text-2xl titillium-web-semibold">
											{faq.answer}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<footer className="footer-area relative text-white pt-16 pb-10 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('./footer-bg.png')" }}>
				<div className='footer-linear'></div>
				<div className="max-w-7xl mx-auto px-8 lg:px-0">
					{/* Footer Bottom */}
					<div className="flex flex-col lg:flex-row items-center justify-between gap-2">
						<div className="flex items-center gap-2">
							<a href="#" className="">
								<img src="./footer-logo.png" alt="Logo" className="w-40 h-40 mx-auto" />
								<span className="inline-block text-xl text-center font-kids-magazine text-stroke-2 drop-shadow-[0px_2px_0px_black] font-semibold">
									TRUMPIDENTIAL<br />TOWER
								</span>
							</a>
						</div>

						<div className='flex gap-2'>
							<a href="#" className="w-9 h-9 bg-black flex items-center justify-center rounded-lg">
								<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M21.037 1.10204C21.3251 0.970185 21.6407 0.924707 21.9505 0.970344C22.2604 1.01598 22.5533 1.15106 22.7989 1.36153C23.0444 1.572 23.2336 1.85019 23.3467 2.16708C23.4598 2.48396 23.4927 2.82805 23.4419 3.16344L20.7967 20.604C20.5401 22.2863 18.8419 23.2511 17.4225 22.4131C16.2351 21.7121 14.4716 20.6319 12.8855 19.5048C12.0923 18.9407 9.66288 17.1342 9.96143 15.8487C10.218 14.7495 14.3002 10.6191 16.6329 8.1635C17.5485 7.1987 17.1309 6.64213 16.0497 7.52957C13.3648 9.73294 9.05406 13.0837 7.6288 14.0269C6.37148 14.8585 5.71602 15.0005 4.93223 14.8585C3.50227 14.5999 2.17617 14.1993 1.09382 13.7112C-0.368763 13.052 -0.297617 10.8664 1.09264 10.2299L21.037 1.10204Z" fill="white" />
								</svg>
							</a>
							<a href="#" className="w-9 h-9 bg-black flex items-center justify-center rounded-lg">
								<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18.6351 0.399414H22.1011L14.5286 9.62096L23.4376 22.1669H16.4623L10.9995 14.5568L4.74736 22.1669H1.27945L9.37947 12.3031L0.833008 0.400418H7.98552L12.9236 7.35622L18.6351 0.399414ZM17.4192 19.9573H19.3396L6.94194 2.49354H4.88115L17.4192 19.9573Z" fill="white" />
								</svg>
							</a>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 lg:mt-[184px]">
						<div className="text-lg titillium-web-semibold text-white">
							<p>Copyright © 2025 Trumpidential Tower. All Rights Reserved.</p>
							<p>DYOR before you YOLO! Crypto presales always carry risk. This is not financial advice.</p>
						</div>

						<div className="flex flex-col gap-2 text-lg titillium-web-semibold text-white">
							<a href="#" className="text-center lg:text-right">Terms and Conditions</a>
							<a href="#" className="text-center lg:text-right">Privacy Policy</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}