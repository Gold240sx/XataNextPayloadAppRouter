import {
	AiOutlineCalendar,
	AiOutlineShoppingCart,
	AiOutlineAreaChart,
	AiOutlineBarChart,
	AiOutlineStock,
	AiFillWechat,
} from "react-icons/ai"
import {
	BsFillChatDotsFill,
	BsFillFileEarmarkFill,
	BsEmojiHeartEyesFill,
	BsCalendarDay,
} from "react-icons/bs"
import {
	FaTruck,
	FaChalkboardTeacher,
	FaTasks,
	FaFileInvoiceDollar,
	FaBlogger,
} from "react-icons/fa"
import {
	FiShoppingBag,
	FiEdit,
	FiPieChart,
	FiBarChart,
	FiCreditCard,
	FiStar,
	FiShoppingCart,
} from "react-icons/fi"
import {
	BsKanban,
	BsCart3,
	BsBarChart,
	BsBoxSeam,
	BsCurrencyDollar,
	BsShield,
	BsChatLeft,
	BsFillFilePersonFill,
	BsPersonCircle,
} from "react-icons/bs"
import { BiColorFill, BiDoorOpen } from "react-icons/bi"
// import { IoMdContacts, IoSettingsSharp } from 'react-icons/io';
import { RiContactsLine, RiKeynoteFill } from "react-icons/ri"
import {
	MdOutlineSupervisorAccount,
	MdSpaceDashboard,
	MdInventory2,
	MdSettings,
	MdWeb,
	MdCampaign,
	MdOutlinePayment,
	MdContactMail,
} from "react-icons/md"
import { HiOutlineRefresh, HiUserGroup } from "react-icons/hi"
import { TiTick } from "react-icons/ti"
import { TbReportAnalytics } from "react-icons/tb"
import { GiLouvrePyramid } from "react-icons/gi"
import { GrLocation, GrDocumentText } from "react-icons/gr"
import { TbFiles } from "react-icons/tb"
import { CgFileDocument } from "react-icons/cg"

const dashCloseIcon = [
	{ lock: "lock", icon: "FaLock" },
	{
		unlock: "unlock",
		icon: "FaUnlock",
	},
	{ open: "open", icon: "BsFIllArrowRightCircleFill" },
	{ close: "close", icon: "BsFillArrowLeftCircleFill" },
]

export const dashboardLinks = [
	{
		title: "Dashboard",
		links: [
			{
				name: "Dashboard",
				icon: <MdSpaceDashboard />,
			},
			{
				name: "Tasks",
				icon: <FaTasks />,
			},
			{
				name: "Reports",
				icon: <TbReportAnalytics />,
			},
		],
	},
	{
		title: "Pages",
		links: [
			{
				name: "leads",
				icon: <BsEmojiHeartEyesFill />,
			},
			{
				name: "Orders",
				icon: <BsCart3 />,
			},
			{
				name: "projects",
				icon: <FaTruck />,
			},
			{
				name: "customers",
				icon: <BsPersonCircle />,
			},
			{
				name: "employees",
				icon: <BsFillFilePersonFill />,
			},
			{
				name: "Contacts",
				icon: <MdContactMail />,
			},
			{
				name: "products",
				icon: <MdInventory2 />,
			},
			{
				name: "user-groups",
				icon: <HiUserGroup />,
			},
			{
				name: "Forms",
				icon: <CgFileDocument />,
			},
			{
				name: "pay",
				icon: <MdOutlinePayment />,
			},
			{
				name: "settings",
				icon: <MdSettings />,
			},
		],
	},
	{
		title: "Apps",
		links: [
			// {
			//   name: 'printing tool',
			//   icon: <RiKeynoteFill />,
			// },
			// {
			//   name: 'proposal-tool',
			//   icon: <RiKeynoteFill />,
			// },
			// {
			//   name: 'Knocking-tool',
			//   icon: <BiDoorOpen />,
			// },
			{
				name: "web-editor",
				icon: <MdWeb />,
			},
			{
				name: "Invoices",
				icon: <FaFileInvoiceDollar />,
			},
			{
				name: "Schedule",
				icon: <BsCalendarDay />,
			},
			{
				name: "training",
				icon: <FaChalkboardTeacher />,
			},
			{
				name: "chat",
				icon: <AiFillWechat />,
			},
			{
				name: "campaigns",
				icon: <MdCampaign />,
			},
			{
				name: "materials",
				icon: <TbFiles />,
			},
		],
	},
]
