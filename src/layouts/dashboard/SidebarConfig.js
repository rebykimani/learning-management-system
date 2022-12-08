import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
// ----------------------------------------------------------------------

const getIcon = ({ icon: Icon }) => Icon && <Icon size="20" />;

const sidebarConfig = [
  {
    title: 'notes',
    path: '/dashboard/notes',
    label: 'My Notes',
    icon: getIcon({ icon: CurrencyExchangeOutlinedIcon })
  },
  {
    title: 'assignments',
    path: '/dashboard/assignments',
    label: "Assignments",
    icon: getIcon({ icon: CreditScoreOutlinedIcon })
  },
  {
    title: 'examinations',
    path: '/dashboard/examinations',
    label: 'Examinations',
    icon: getIcon({ icon: GroupOutlinedIcon })
  },
  {
    title: 'resources',
    path: '/dashboard/resources',
    label: 'Resources',
    icon: getIcon({ icon: GroupOutlinedIcon })
  }
];

export default sidebarConfig;
